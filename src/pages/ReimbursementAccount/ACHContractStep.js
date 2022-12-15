import _ from 'underscore';
import lodashGet from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {withOnyx} from 'react-native-onyx';
import * as store from '../../libs/actions/ReimbursementAccount/store';
import Text from '../../components/Text';
import HeaderWithCloseButton from '../../components/HeaderWithCloseButton';
import styles from '../../styles/styles';
import CheckboxWithLabel from '../../components/CheckboxWithLabel';
import TextLink from '../../components/TextLink';
import IdentityForm from './IdentityForm';
import withLocalize, {withLocalizePropTypes} from '../../components/withLocalize';
import * as BankAccounts from '../../libs/actions/BankAccounts';
import Navigation from '../../libs/Navigation/Navigation';
import CONST from '../../CONST';
import * as ValidationUtils from '../../libs/ValidationUtils';
import ONYXKEYS from '../../ONYXKEYS';
import compose from '../../libs/compose';
import * as ReimbursementAccountUtils from '../../libs/ReimbursementAccountUtils';
import reimbursementAccountPropTypes from './reimbursementAccountPropTypes';
import Form from '../../components/Form';
import * as FormActions from '../../libs/actions/FormActions';
import * as NumberUtils from '../../libs/NumberUtils';

const propTypes = {
    /** Name of the company */
    companyName: PropTypes.string.isRequired,

    ...withLocalizePropTypes,

    /** Bank account currently in setup */
    // eslint-disable-next-line react/no-unused-prop-types
    reimbursementAccount: reimbursementAccountPropTypes.isRequired,
};

class ACHContractStep extends React.Component {
    constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);

        this.addBeneficialOwner = this.addBeneficialOwner.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            ownsMoreThan25Percent: ReimbursementAccountUtils.getDefaultStateForField(props, 'ownsMoreThan25Percent', false),
            hasOtherBeneficialOwners: ReimbursementAccountUtils.getDefaultStateForField(props, 'hasOtherBeneficialOwners', false),
            beneficialOwners: ReimbursementAccountUtils.getDefaultStateForField(props, 'beneficialOwners', []),
        };
    }

    /**
     * @param {Object} values - form input values passed by the Form component
     * @returns {Object}
     */
    validate(values) {
        const errors = {};

        if (this.state.hasOtherBeneficialOwners) {
            _.each(this.state.beneficialOwners, (ownerID) => {
                if (!ValidationUtils.isRequiredFulfilled(values[`beneficialOwner.${ownerID}.firstName`])) {
                    errors[`beneficialOwner.${ownerID}.firstName`] = this.props.translate('bankAccount.error.firstName');
                }

                if (!ValidationUtils.isRequiredFulfilled(values[`beneficialOwner.${ownerID}.lastName`])) {
                    errors[`beneficialOwner.${ownerID}.lastName`] = this.props.translate('bankAccount.error.lastName');
                }

                if (!ValidationUtils.isRequiredFulfilled(values[`beneficialOwner.${ownerID}.dob`])) {
                    errors[`beneficialOwner.${ownerID}.dob`] = this.props.translate('bankAccount.error.dob');
                }

                if (values.dob && !ValidationUtils.meetsAgeRequirements(values[`beneficialOwner.${ownerID}.dob`])) {
                    errors[`beneficialOwner.${ownerID}.dob`] = this.props.translate('bankAccount.error.age');
                }

                if (!ValidationUtils.isRequiredFulfilled(values[`beneficialOwner.${ownerID}.ssnLast4`])
                    || !ValidationUtils.isValidSSNLastFour(values[`beneficialOwner.${ownerID}.ssnLast4`])) {
                    errors[`beneficialOwner.${ownerID}.ssnLast4`] = this.props.translate('bankAccount.error.ssnLast4');
                }

                if (!ValidationUtils.isRequiredFulfilled(values[`beneficialOwner.${ownerID}.street`])) {
                    errors[`beneficialOwner.${ownerID}.street`] = this.props.translate('bankAccount.error.address');
                }

                if (values[`beneficialOwner.${ownerID}.street`]
                    && !ValidationUtils.isValidAddress(values[`beneficialOwner.${ownerID}.street`])) {
                    errors[`beneficialOwner.${ownerID}.street`] = this.props.translate('bankAccount.error.addressStreet');
                }

                if (!ValidationUtils.isRequiredFulfilled(values[`beneficialOwner.${ownerID}.city`])) {
                    errors[`beneficialOwner.${ownerID}.city`] = this.props.translate('bankAccount.error.addressCity');
                }

                if (!ValidationUtils.isRequiredFulfilled(values[`beneficialOwner.${ownerID}.state`])) {
                    errors[`beneficialOwner.${ownerID}.state`] = this.props.translate('bankAccount.error.addressState');
                }

                if (!ValidationUtils.isRequiredFulfilled(values[`beneficialOwner.${ownerID}.zipCode`])
                    || !ValidationUtils.isValidZipCode(values[`beneficialOwner.${ownerID}.zipCode`])) {
                    errors[`beneficialOwner.${ownerID}.zipCode`] = this.props.translate('bankAccount.error.zipCode');
                }
            });
        }

        if (!ValidationUtils.isRequiredFulfilled(values.acceptTermsAndConditions)) {
            errors.acceptTermsAndConditions = this.props.translate('common.error.acceptedTerms');
        }

        if (!ValidationUtils.isRequiredFulfilled(values.certifyTrueInformation)) {
            errors.certifyTrueInformation = this.props.translate('beneficialOwnersStep.error.certify');
        }

        return errors;
    }

    removeBeneficialOwner(ownerID) {
        this.setState((prevState) => {
            const beneficialOwners = _.without(prevState.beneficialOwners, ownerID);

            // We set 'beneficialOwners' to null first because we don't have a way yet to replace a specific property without merging it.
            // We don't use the debounced function because we want to make both function calls.
            FormActions.setDraftValues(ONYXKEYS.REIMBURSEMENT_ACCOUNT, {beneficialOwners: null});
            FormActions.setDraftValues(ONYXKEYS.REIMBURSEMENT_ACCOUNT, {beneficialOwners});

            return {beneficialOwners};
        });
    }

    addBeneficialOwner() {
        this.setState((prevState) => {
            const beneficialOwners = [...prevState.beneficialOwners, NumberUtils.rand64()];

            // We set 'beneficialOwners' to null first because we don't have a way yet to replace a specific property without merging it.
            // We don't use the debounced function because we want to make both function calls.
            FormActions.setDraftValues(ONYXKEYS.REIMBURSEMENT_ACCOUNT, {beneficialOwners: null});
            FormActions.setDraftValues(ONYXKEYS.REIMBURSEMENT_ACCOUNT, {beneficialOwners});
            return {beneficialOwners};
        });
    }

    /**
     * @returns {Boolean}
     */
    canAddMoreBeneficialOwners() {
        return _.size(this.state.beneficialOwners) < 3
            || (_.size(this.state.beneficialOwners) === 3 && !this.state.ownsMoreThan25Percent);
    }

    submit(values) {
        const bankAccountID = lodashGet(store.getReimbursementAccountInSetup(), 'bankAccountID');

        const beneficialOwners = !this.state.hasOtherBeneficialOwners ? []
            : _.map(this.state.beneficialOwners, ownerID => ({
                firstName: lodashGet(values, `beneficialOwner.${ownerID}.firstName`),
                lastName: lodashGet(values, `beneficialOwner.${ownerID}.lastName`),
                dob: lodashGet(values, `beneficialOwner.${ownerID}.dob`),
                ssnLast4: lodashGet(values, `beneficialOwner.${ownerID}.ssnLast4`),
                street: lodashGet(values, `beneficialOwner.${ownerID}.street`),
                city: lodashGet(values, `beneficialOwner.${ownerID}.city`),
                state: lodashGet(values, `beneficialOwner.${ownerID}.state`),
                zipCode: lodashGet(values, `beneficialOwner.${ownerID}.zipCode`),
            }));

        BankAccounts.updateBeneficialOwnersForBankAccount({
            ownsMoreThan25Percent: values.ownsMoreThan25Percent,
            hasOtherBeneficialOwners: values.hasOtherBeneficialOwners,
            acceptTermsAndConditions: values.acceptTermsAndConditions,
            certifyTrueInformation: values.certifyTrueInformation,
            beneficialOwners: JSON.stringify(beneficialOwners),
            bankAccountID,
        });
    }

    render() {
        return (
            <>
                <HeaderWithCloseButton
                    title={this.props.translate('beneficialOwnersStep.additionalInformation')}
                    stepCounter={{step: 4, total: 5}}
                    onCloseButtonPress={Navigation.dismissModal}
                    onBackButtonPress={() => {
                        BankAccounts.clearOnfidoToken();
                        BankAccounts.goToWithdrawalAccountSetupStep(CONST.BANK_ACCOUNT.STEP.REQUESTOR);
                    }}
                    shouldShowGetAssistanceButton
                    guidesCallTaskID={CONST.GUIDES_CALL_TASK_IDS.WORKSPACE_BANK_ACCOUNT}
                    shouldShowBackButton
                />
                <Form
                    formID={ONYXKEYS.FORMS.REIMBURSEMENT_ACCOUNT_FORM}
                    validate={this.validate}
                    onSubmit={this.submit}
                    submitButtonText={this.props.translate('common.saveAndContinue')}
                    style={[styles.mh5, styles.flexGrow1]}
                >
                    <Text style={[styles.mb5]}>
                        <Text>{this.props.translate('beneficialOwnersStep.checkAllThatApply')}</Text>
                    </Text>
                    <CheckboxWithLabel
                        inputID="ownsMoreThan25Percent"
                        style={[styles.mb2]}
                        LabelComponent={() => (
                            <Text>
                                {this.props.translate('beneficialOwnersStep.iOwnMoreThan25Percent')}
                                <Text style={[styles.textStrong]}>{this.props.companyName}</Text>
                            </Text>
                        )}
                        onValueChange={(value) => {
                            this.setState({ownsMoreThan25Percent: value});
                            if (value && this.state.beneficialOwners.length > 3) {
                                // if ownsMoreThan25Percent is true, then there can only be 3 IdentityForms so remove the last one
                                this.setState(prevState => ({beneficialOwners: prevState.beneficialOwners.slice(0, -1)}));
                            }
                        }}
                        shouldSaveDraft
                    />
                    <CheckboxWithLabel
                        inputID="hasOtherBeneficialOwners"
                        style={[styles.mb2]}
                        LabelComponent={() => (
                            <Text>
                                {this.props.translate('beneficialOwnersStep.someoneOwnsMoreThan25Percent')}
                                <Text style={[styles.textStrong]}>{this.props.companyName}</Text>
                            </Text>
                        )}
                        onValueChange={(value) => {
                            this.setState({hasOtherBeneficialOwners: value});
                            if (value && this.state.beneficialOwners.length === 0) {
                                // if hasOtherBeneficialOwners is true and no working IdentityForms, add one
                                this.addBeneficialOwner();
                            }
                        }}
                        shouldSaveDraft
                    />
                    {this.state.hasOtherBeneficialOwners && (
                        <View style={[styles.mb2]}>
                            {_.map(this.state.beneficialOwners, (ownerID, index) => (
                                <View key={index} style={[styles.p5, styles.border, styles.mb2]}>
                                    <Text style={[styles.textStrong, styles.mb2]}>
                                        {this.props.translate('beneficialOwnersStep.additionalOwner')}
                                    </Text>
                                    <IdentityForm
                                        translate={this.props.translate}
                                        style={[styles.mb2]}
                                        defaultValues={{
                                            firstName: ReimbursementAccountUtils.getDefaultStateForField(this.props, `beneficialOwner.${ownerID}.firstName`),
                                            lastName: ReimbursementAccountUtils.getDefaultStateForField(this.props, `beneficialOwner.${ownerID}.lastName`),
                                            street: ReimbursementAccountUtils.getDefaultStateForField(this.props, `beneficialOwner.${ownerID}.street`),
                                            city: ReimbursementAccountUtils.getDefaultStateForField(this.props, `beneficialOwner.${ownerID}.city`),
                                            state: ReimbursementAccountUtils.getDefaultStateForField(this.props, `beneficialOwner.${ownerID}.state`),
                                            zipCode: ReimbursementAccountUtils.getDefaultStateForField(this.props, `beneficialOwner.${ownerID}.zipCode`),
                                            dob: ReimbursementAccountUtils.getDefaultStateForField(this.props, `beneficialOwner.${ownerID}.dob`),
                                            ssnLast4: ReimbursementAccountUtils.getDefaultStateForField(this.props, `beneficialOwner.${ownerID}.ssnLast4`),
                                        }}
                                        inputKeys={{
                                            firstName: `beneficialOwner.${ownerID}.firstName`,
                                            lastName: `beneficialOwner.${ownerID}.lastName`,
                                            dob: `beneficialOwner.${ownerID}.dob`,
                                            ssnLast4: `beneficialOwner.${ownerID}.ssnLast4`,
                                            street: `beneficialOwner.${ownerID}.street`,
                                            city: `beneficialOwner.${ownerID}.city`,
                                            state: `beneficialOwner.${ownerID}.state`,
                                            zipCode: `beneficialOwner.${ownerID}.zipCode`,
                                        }}
                                        shouldSaveDraft
                                    />
                                    {this.state.beneficialOwners.length > 1 && (
                                        <TextLink onPress={() => this.removeBeneficialOwner(ownerID)}>
                                            {this.props.translate('beneficialOwnersStep.removeOwner')}
                                        </TextLink>
                                    )}
                                </View>
                            ))}
                            {this.canAddMoreBeneficialOwners() && (
                                <TextLink onPress={this.addBeneficialOwner}>
                                    {this.props.translate('beneficialOwnersStep.addAnotherIndividual')}
                                    <Text style={[styles.textStrong, styles.link]}>{this.props.companyName}</Text>
                                </TextLink>
                            )}
                        </View>
                    )}
                    <Text style={[styles.mv5]}>
                        {this.props.translate('beneficialOwnersStep.agreement')}
                    </Text>
                    <CheckboxWithLabel
                        inputID="acceptTermsAndConditions"
                        style={[styles.mt4]}
                        LabelComponent={() => (
                            <View style={[styles.flexRow]}>
                                <Text>{this.props.translate('common.iAcceptThe')}</Text>
                                <TextLink href="https://use.expensify.com/achterms">
                                    {`${this.props.translate('beneficialOwnersStep.termsAndConditions')}`}
                                </TextLink>
                            </View>
                        )}
                        shouldSaveDraft
                    />
                    <CheckboxWithLabel
                        inputID="certifyTrueInformation"
                        style={[styles.mt4]}
                        LabelComponent={() => (
                            <Text>{this.props.translate('beneficialOwnersStep.certifyTrueAndAccurate')}</Text>
                        )}
                        shouldSaveDraft
                    />
                </Form>
            </>
        );
    }
}

ACHContractStep.propTypes = propTypes;
export default compose(
    withLocalize,
    withOnyx({
        reimbursementAccount: {
            key: ONYXKEYS.REIMBURSEMENT_ACCOUNT,
        },
        reimbursementAccountDraft: {
            key: ONYXKEYS.REIMBURSEMENT_ACCOUNT_DRAFT,
        },
    }),
)(ACHContractStep);
