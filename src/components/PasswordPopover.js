import {TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/styles';
import ExpensifyText from './ExpensifyText';
import TextInputFocusable from './TextInputFocusable';
import Popover from './Popover';
import withLocalize, {withLocalizePropTypes} from './withLocalize';
import compose from '../libs/compose';
import withWindowDimensions from './withWindowDimensions';

const propTypes = {
    /** Is the popover currently showing? */
    isVisible: PropTypes.bool.isRequired,

    /** Function that gets called when the user closes the modal */
    onClose: PropTypes.func.isRequired,

    /** Where the popover should be placed */
    anchorPosition: PropTypes.shape({
        top: PropTypes.number,
        left: PropTypes.number,
    }).isRequired,

    /** Function that gets called when the user clicks the delete / make default button */
    onSubmit: PropTypes.func,

    /** The text that should be displayed in the submit button */
    submitButtonText: PropTypes.string,

    /** Is the reason for the password dangerous. This will change the button style to red */
    isDangerousAction: PropTypes.bool,

    ...withLocalizePropTypes,
};

const defaultProps = {
    onSubmit: () => {},
    submitButtonText: '',
    isDangerousAction: false,
};

class PasswordPopover extends Component {
    constructor(props) {
        super(props);

        this.passwordInput = undefined;

        this.focusInput = this.focusInput.bind(this);

        this.state = {
            password: '',
        };
    }

    /**
     * Focus the password input
     */
    focusInput() {
        if (!this.passwordInput) {
            return;
        }
        this.passwordInput.focus();
    }

    render() {
        return (
            <Popover
                isVisible={this.props.isVisible}
                onClose={this.props.onClose}
                anchorPosition={this.props.anchorPosition}
                onModalShow={this.focusInput}
            >
                <View
                    style={[
                        styles.m2,
                        !this.props.isSmallScreenWidth ? styles.defaultDeletePopover : '',
                    ]}
                >
                    <ExpensifyText
                        style={[
                            styles.h1,
                            styles.mv2,
                            styles.alignSelfCenter,
                        ]}
                    >
                        {this.props.translate('passwordForm.pleaseFillPassword')}
                    </ExpensifyText>
                    <TextInputFocusable
                        style={[
                            styles.textInput,
                            styles.border,
                            styles.w100,
                        ]}
                        onChangeText={password => this.setState({password})}
                        ref={el => this.passwordInput = el}
                        onSubmitEditing={() => this.props.onSubmit(this.state.password)}
                        autoFocus
                        secureTextEntry
                    />
                    <TouchableOpacity
                        onPress={() => this.props.onSubmit(this.state.password)}
                        style={[
                            styles.button,
                            styles.mv2,
                            styles.defaultOrDeleteButton,
                            this.props.isDangerousAction && styles.buttonDanger,
                        ]}
                    >
                        <ExpensifyText style={[styles.buttonText]}>
                            {this.props.submitButtonText}
                        </ExpensifyText>
                    </TouchableOpacity>
                </View>
            </Popover>
        );
    }
}

PasswordPopover.propTypes = propTypes;
PasswordPopover.defaultProps = defaultProps;
export default compose(
    withWindowDimensions,
    withLocalize,
)(PasswordPopover);
