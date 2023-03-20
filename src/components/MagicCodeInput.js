import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'underscore';
import styles from '../styles/styles';
import * as ValidationUtils from '../libs/ValidationUtils';
import CONST from '../CONST';
import TextInput from './TextInput';
import FormHelpMessage from './FormHelpMessage';

const propTypes = {
    /** Name attribute for the input */
    name: PropTypes.string,

    /** Input value */
    value: PropTypes.string,

    /** Should the input auto focus */
    autoFocus: PropTypes.bool,

    /** Whether we should wait before focusing the TextInput, useful when using transitions  */
    shouldDelayFocus: PropTypes.bool,

    /** A ref to forward the current input */
    forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.instanceOf(React.Component)}),
    ]),

    /** Error text to display */
    errorText: PropTypes.string,

    /** Specifies autocomplete hints for the system, so it can provide autofill */
    autoComplete: PropTypes.oneOf(['sms-otp', 'one-time-code']).isRequired,

    /* Should submit when the input is complete */
    submitOnComplete: PropTypes.bool,

    /** Id to use for this button */
    nativeID: PropTypes.string,

    /** Function to call when the input is changed  */
    onChange: PropTypes.func,

    /** Function to call when the input is submitted or fully complete */
    onSubmit: PropTypes.func,
};

const defaultProps = {
    value: undefined,
    name: '',
    autoFocus: true,
    shouldDelayFocus: false,
    forwardedRef: undefined,
    errorText: '',
    submitOnComplete: false,
    nativeID: '',
    onChange: () => {},
    onSubmit: () => {},
};

class MagicCodeInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this.inputNrArray = Array.from(Array(CONST.MAGIC_CODE_NUMBERS).keys());
        this.inputRef = null;

        this.state = {
            input: '',
            focusedIndex: 0,
            editIndex: 0,
            numbers: props.value ? this.decomposeString(props.value) : Array(CONST.MAGIC_CODE_NUMBERS).fill(''),
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    componentDidMount() {
        if (!this.props.forwardedRef) {
            return;
        }
        this.props.forwardedRef(this.inputRef);

        if (!this.props.autoFocus) {
            return;
        }

        if (this.props.shouldDelayFocus) {
            this.focusTimeout = setTimeout(() => this.inputRef.focus(), CONST.ANIMATED_TRANSITION);
            return;
        }
        this.inputRef.focus();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value === this.props.value) {
            return;
        }

        this.setState({
            numbers: this.decomposeString(this.props.value),
        });
    }

    componentWillUnmount() {
        if (!this.focusTimeout) {
            return;
        }
        clearTimeout(this.focusTimeout);
    }

    /**
     * Focuses on the input when it is pressed.
     *
     * @param {object} event The event passed by the input.
     * @param {number} index The index of the input.
     */
    onFocus(event, index) {
        event.preventDefault();
        this.setState({
            input: '',
            focusedIndex: index,
            editIndex: index,
        });
        this.inputRef.focus();
    }

    /**
     * Updates the magic inputs with the contents written in the
     * input. It spreads each number into each input and updates
     * the focused input on the next empty one, if exists.
     * It handles both fast typing and only one digit at a time
     * in a specific position.
     *
     * @param {string} value The contents of the input text.
     */
    onChangeText(value) {
        if (_.isUndefined(value) || _.isEmpty(value) || !ValidationUtils.isNumeric(value)) {
            return;
        }

        const numbersArr = value.trim().split('');
        this.setState((prevState) => {
            const numbers = [
                ...prevState.numbers.slice(0, prevState.editIndex),
                ...numbersArr.slice(0, CONST.MAGIC_CODE_NUMBERS - prevState.editIndex),
            ];

            // Updates the focused input taking into consideration the last input
            // edited and the number of digits added by the user.
            const focusedIndex = Math.min(prevState.editIndex + (numbersArr.length - 1), CONST.MAGIC_CODE_NUMBERS - 1);

            return {
                numbers,
                focusedIndex,
                input: value,
                editIndex: prevState.editIndex,
            };
        }, () => {
            const finalInput = this.composeToString(this.state.numbers);
            this.props.onChange(finalInput);

            if (this.props.submitOnComplete && finalInput.length === CONST.MAGIC_CODE_NUMBERS) {
                this.props.onSubmit(finalInput);
            }
        });
    }

    /**
     * Handles logic related to certain key presses.
     *
     * NOTE: when using Android Emulator, this can only be tested using
     * hardware keyboard inputs.
     *
     * @param {object} event The event passed by the key press.
     */
    onKeyPress({nativeEvent: {key: keyValue}}) {
        // Handles the delete character logic if the current input is less than 2 characters,
        // meaning that it's the last character to be deleted or it's a character being
        // deleted in the middle of the input, which should delete all the characters after it.
        if (keyValue === 'Backspace' && this.state.input.length < 2) {
            this.setState(({numbers, focusedIndex, editIndex}) => ({
                input: '',
                numbers: focusedIndex === 0 ? [] : [...numbers.slice(0, focusedIndex), ''],
                focusedIndex: Math.max(0, focusedIndex - 1),
                editIndex: Math.max(0, editIndex - 1),
            }));
        } else if (keyValue === 'ArrowLeft') {
            this.setState(prevState => ({
                input: '',
                focusedIndex: prevState.focusedIndex - 1,
                editIndex: prevState.focusedIndex - 1,
            }));
        } else if (keyValue === 'ArrowRight') {
            this.setState(prevState => ({
                input: '',
                focusedIndex: prevState.focusedIndex + 1,
                editIndex: prevState.focusedIndex + 1,
            }));
        } else if (keyValue === 'Enter') {
            this.setState({input: ''});
            this.props.onSubmit(this.composeToString(this.state.numbers));
        }
    }

    /**
     * Converts a given string into an array of numbers that must have the same
     * number of elements as the number of inputs.
     *
     * @param {string} value The string to be converted into an array.
     * @returns {array} The array of numbers.
     */
    decomposeString(value) {
        let arr = _.map(value.trim().split('').slice(0, CONST.MAGIC_CODE_NUMBERS), v => (ValidationUtils.isNumeric(v) ? v : ''));
        if (arr.length < CONST.MAGIC_CODE_NUMBERS) {
            arr = arr.concat(Array(CONST.MAGIC_CODE_NUMBERS - arr.length).fill(''));
        }
        return arr;
    }

    composeToString(value) {
        return _.filter(value, v => v !== undefined).join('');
    }

    render() {
        return (
            <>
                <View style={[styles.flexRow, styles.justifyContentBetween]}>
                    {_.map(this.inputNrArray, index => (
                        <View key={index} style={[styles.w15]}>
                            <TextInput
                                editable={false}
                                focused={this.state.focusedIndex === index}
                                value={this.state.numbers[index] || ''}
                                maxLength={1}
                                blurOnSubmit={false}
                                onPress={event => this.onFocus(event, index)}
                                inputStyle={[styles.iouAmountTextInput, styles.textAlignCenter]}
                            />
                        </View>
                    ))}
                </View>
                <View style={[StyleSheet.absoluteFillObject, styles.w15, styles.opacity0]}>
                    <TextInput
                        ref={el => this.inputRef = el}
                        autoFocus={this.props.autoFocus}
                        inputMode="numeric"
                        textContentType="oneTimeCode"
                        name={this.props.name}
                        maxLength={CONST.MAGIC_CODE_NUMBERS}
                        value={this.state.input}
                        autoComplete={this.props.autoComplete}
                        nativeID={this.props.nativeID}
                        keyboardType={CONST.KEYBOARD_TYPE.NUMBER_PAD}
                        onPress={event => this.onFocus(event, 0)}
                        onChangeText={this.onChangeText}
                        onKeyPress={this.onKeyPress}
                        onBlur={() => this.setState({focusedIndex: undefined})}
                    />
                </View>
                {!_.isEmpty(this.props.errorText) && (
                    <FormHelpMessage isError message={this.props.errorText} />
                )}
            </>
        );
    }
}

MagicCodeInput.propTypes = propTypes;
MagicCodeInput.defaultProps = defaultProps;

export default React.forwardRef((props, ref) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MagicCodeInput {...props} forwardedRef={ref} />
));
