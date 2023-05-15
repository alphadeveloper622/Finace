import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {withOnyx} from 'react-native-onyx';
import moment from 'moment';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import HeaderWithCloseButton from '../../../../components/HeaderWithCloseButton';
import withLocalize, {withLocalizePropTypes} from '../../../../components/withLocalize';
import ROUTES from '../../../../ROUTES';
import Form from '../../../../components/Form';
import ONYXKEYS from '../../../../ONYXKEYS';
import * as ValidationUtils from '../../../../libs/ValidationUtils';
import styles from '../../../../styles/styles';
import Navigation from '../../../../libs/Navigation/Navigation';
import * as PersonalDetails from '../../../../libs/actions/PersonalDetails';
import compose from '../../../../libs/compose';
import NewDatePicker from '../../../../components/NewDatePicker';
import CONST from '../../../../CONST';

const propTypes = {
    /* Onyx Props */

    /** User's private personal details */
    privatePersonalDetails: PropTypes.shape({
        dob: PropTypes.string,
    }),

    ...withLocalizePropTypes,
};

const defaultProps = {
    privatePersonalDetails: {
        dob: '',
    },
};

const DateOfBirthPage = ({translate, route, navigation, privatePersonalDetails}) => {
    const [selectedYear, setSelectedYear] = useState('');
    const minDate = moment().subtract(CONST.DATE_BIRTH.MAX_AGE, 'Y').toDate();
    const maxDate = moment().subtract(CONST.DATE_BIRTH.MIN_AGE, 'Y').toDate();

    /**
     * Reads the year from route params. The year should be set on the route when navigating back from the calendar picker
     * This lets us pass the selected year without having to overwrite the value in Onyx
     */
    useEffect(() => {
        const getYearFromRouteParams = () => {
            const {params} = route;
            if (params && params.year) {
                setSelectedYear(params.year);
            }
        };

        navigation.addListener('focus', getYearFromRouteParams);
        return () => navigation.removeListener('focus', getYearFromRouteParams);
    }, [navigation, route]);

    /**
     * @param {Object} values
     * @param {String} values.dob - date of birth
     * @returns {Object} - An object containing the errors for each inputID
     */
    const validate = useCallback(
        (values) => {
            const errors = {};
            const minimumAge = CONST.DATE_BIRTH.MIN_AGE;
            const maximumAge = CONST.DATE_BIRTH.MAX_AGE;

            if (!values.dob || !ValidationUtils.isValidDate(values.dob)) {
                errors.dob = translate('common.error.fieldRequired');
            }
            const dateError = ValidationUtils.getAgeRequirementError(values.dob, minimumAge, maximumAge);
            if (dateError) {
                errors.dob = dateError;
            }

            return errors;
        },
        [translate],
    );

    return (
        <ScreenWrapper includeSafeAreaPaddingBottom={false}>
            <HeaderWithCloseButton
                title={translate('common.dob')}
                shouldShowBackButton
                onBackButtonPress={() => Navigation.navigate(ROUTES.SETTINGS_PERSONAL_DETAILS)}
                onCloseButtonPress={() => Navigation.dismissModal(true)}
            />
            <Form
                style={[styles.flexGrow1, styles.ph5]}
                formID={ONYXKEYS.FORMS.DATE_OF_BIRTH_FORM}
                validate={validate}
                onSubmit={PersonalDetails.updateDateOfBirth}
                submitButtonText={translate('common.save')}
                enabledWhenOffline
            >
                <NewDatePicker
                    inputID="dob"
                    label={translate('common.date')}
                    defaultValue={privatePersonalDetails.dob || ''}
                    minDate={minDate}
                    maxDate={maxDate}
                    selectedYear={selectedYear}
                />
            </Form>
        </ScreenWrapper>
    );
};

DateOfBirthPage.propTypes = propTypes;
DateOfBirthPage.defaultProps = defaultProps;
DateOfBirthPage.displayName = 'DateOfBirthPage';

export default compose(
    withLocalize,
    withOnyx({
        privatePersonalDetails: {
            key: ONYXKEYS.PRIVATE_PERSONAL_DETAILS,
        },
    }),
)(DateOfBirthPage);
