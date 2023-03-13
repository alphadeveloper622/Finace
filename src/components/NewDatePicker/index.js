import React from 'react';
import {View, Animated} from 'react-native';
import moment from 'moment';
import _ from 'underscore';
import TextInput from '../TextInput';
import CalendarPicker from '../CalendarPicker';
import CONST from '../../CONST';
import styles from '../../styles/styles';
import {propTypes as datePickerPropTypes, defaultProps as defaultDatePickerProps} from './datePickerPropTypes';
import './styles.css';

const propTypes = {
    ...datePickerPropTypes,
};

const datePickerDefaultProps = {
    ...defaultDatePickerProps,
};

class NewDatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPickerVisible: false,
            selectedDate: moment(props.value || props.defaultValue).toDate(),
        };

        this.setDate = this.setDate.bind(this);
        this.showPicker = this.showPicker.bind(this);
        this.hidePicker = this.hidePicker.bind(this);

        this.opacity = new Animated.Value(0);

        /* We're using uncontrolled input otherwise it wont be possible to
        * raise change events with a date value - each change will produce a date
        * and make us reset the text input */
        this.defaultValue = props.defaultValue
            ? moment(props.defaultValue).format(CONST.DATE.MOMENT_FORMAT_STRING)
            : '';
    }

    /**
     * Trigger the `onInputChange` handler when the user input has a complete date or is cleared
     * @param {Date} selectedDate
     */
    setDate(selectedDate) {
        this.setState({selectedDate}, () => {
            this.props.onInputChange(moment(selectedDate).format(CONST.DATE.MOMENT_FORMAT_STRING));
            this.hidePicker();
            this.textInputRef.blur();
        });
    }

    /**
     * Function to show up and animates the picker.
     */
    showPicker() {
        this.setState({isPickerVisible: true}, () => {
            Animated.timing(this.opacity, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }).start();
        });
    }

    /**
     * Function to animate and hide the picker.
     */
    hidePicker() {
        Animated.timing(this.opacity, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start((animationResult) => {
            if (!animationResult.finished) {
                return;
            }
            this.setState({isPickerVisible: false});
        });
    }

    render() {
        return (
            <>
                <View style={[this.props.isSmallScreenWidth ? styles.flex2 : {}]}>
                    <TextInput
                        forceActiveLabel
                        ref={(el) => {
                            this.textInputRef = el;
                            if (!_.isFunction(this.props.innerRef)) {
                                return;
                            }
                            this.props.innerRef(el);
                        }}
                        onPress={this.showPicker}
                        onBlur={this.hidePicker}
                        label={this.props.label}
                        value={this.props.value}
                        defaultValue={this.defaultValue}
                        placeholder={this.props.placeholder || CONST.DATE.MOMENT_FORMAT_STRING}
                        errorText={this.props.errorText}
                        containerStyles={this.props.containerStyles}
                        disabled={this.props.disabled}
                        editable={false}
                    />
                </View>
                {
                    this.state.isPickerVisible && (
                    <Animated.View
                        onMouseDown={(e) => {
                            // To prevent focus stealing
                            e.preventDefault();
                        }}
                        style={[styles.datePickerPopoverWeb, styles.border, {opacity: this.opacity}]}
                    >
                        <CalendarPicker
                            minDate={this.props.minDate}
                            maxDate={this.props.maxDate}
                            value={this.state.selectedDate}
                            onSelected={this.setDate}
                            defaultYear={this.props.defaultYear}
                        />
                    </Animated.View>
                    )
                }
            </>
        );
    }
}

NewDatePicker.propTypes = propTypes;
NewDatePicker.defaultProps = datePickerDefaultProps;

export default React.forwardRef((props, ref) => (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <NewDatePicker {...props} innerRef={ref} />
));
