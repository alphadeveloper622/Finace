import _ from 'underscore';
import React, {Component} from 'react';
import {View} from 'react-native';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import HeaderWithCloseButton from '../../../../components/HeaderWithCloseButton';
import withLocalize, {withLocalizePropTypes} from '../../../../components/withLocalize';
import ROUTES from '../../../../ROUTES';
import Form from '../../../../components/Form';
import ONYXKEYS from '../../../../ONYXKEYS';
import CONST from '../../../../CONST';
import * as ValidationUtils from '../../../../libs/ValidationUtils';
import styles from '../../../../styles/styles';
import Navigation from '../../../../libs/Navigation/Navigation';
import * as PersonalDetails from '../../../../libs/actions/PersonalDetails';
import compose from '../../../../libs/compose';
import DatePicker from '../../../../components/DatePicker';
import { withOnyx } from 'react-native-onyx';
import ONYXKEYS from '../../../../ONYXKEYS';

const propTypes = {
    /* Onyx Props */

    /** User's private personal details */
    privatePersonalDetails: PropTypes.shape({
        dateOfBirth: PropTypes.string,
    }),

    ...withLocalizePropTypes,
};

const defaultProps = {
    dateOfBirth: '',
};

class DateOfBirthPage extends Component {
    constructor(props) {
        super(props);

        this.validate = this.validate.bind(this);
        this.updateDateOfBirth = this.updateDateOfBirth.bind(this);
    }

    /**
     * Submit form to update user's first and last legal name
     * @param {Object} values
     * @param {String} values.dateOfBirth
     */
    updateDateOfBirth(values) {
        PersonalDetails.updateDateOfBirth(
            values.dateOfBirth.trim(),
        );
    }

    /**
     * @param {Object} values
     * @param {String} values.dateOfBirth
     * @returns {Object} - An object containing the errors for each inputID
     */
    validate(values) {
        const errors = {};
        const minimumAge = 5;
        const maximumAge = 150;

        if (_.isEmpty(values.dateOfBirth)) {
            errors.dateOfBirth = this.props.translate('personalDetailsPages.error.dateInvalid');
        }
        const dateError = ValidationUtils.getAgeRequirementError(values.dateOfBirth, minimumAge, maximumAge);
        if (dateError) {
            errors.dateOfBirth = dateError;
        }

        return errors;
    }

    render() {
        const privateDetails = this.props.privatePersonalDetails || {};

        return (
            <ScreenWrapper includeSafeAreaPaddingBottom={false}>
                <HeaderWithCloseButton
                    shouldShowBackButton
                    onBackButtonPress={() => Navigation.navigate(ROUTES.SETTINGS_PERSONAL_DETAILS)}
                    onCloseButtonPress={() => Navigation.dismissModal(true)}
                />
                <Form
                    style={[styles.flexGrow1, styles.ph5]}
                    formID={ONYXKEYS.FORMS.DATE_OF_BIRTH_FORM}
                    validate={this.validate}
                    onSubmit={this.updateDateOfBirth}
                    submitButtonText={this.props.translate('common.save')}
                    enabledWhenOffline
                >
                    <View>
                        <DatePicker
                            inputID={'dateOfBirth'}
                            label={this.props.translate('common.date')}
                            defaultValue={privateDetails.dateOfBirth || ''}
                            shouldSaveDraft
                        />
                    </View>
                </Form>
            </ScreenWrapper>
        );
    }
}

DateOfBirthPage.propTypes = propTypes;
DateOfBirthPage.defaultProps = defaultProps;

export default compose(
    withLocalize,
    withOnyx({
        privatePersonalDetails: {
            key: ONYXKEYS.PRIVATE_PERSONAL_DETAILS,
        },
    }),
)(DateOfBirthPage);
