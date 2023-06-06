import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView} from 'react-native';
import {withOnyx} from 'react-native-onyx';
import HeaderWithCloseButton from '../../components/HeaderWithCloseButton';
import Navigation from '../../libs/Navigation/Navigation';
import withLocalize, {withLocalizePropTypes} from '../../components/withLocalize';
import styles from '../../styles/styles';
import * as BankAccounts from '../../libs/actions/BankAccounts';
import TextLink from '../../components/TextLink';
import compose from '../../libs/compose';
import ONYXKEYS from '../../ONYXKEYS';
import CheckboxWithLabel from '../../components/CheckboxWithLabel';
import Text from '../../components/Text';
import ShortTermsForm from './TermsPage/ShortTermsForm';
import LongTermsForm from './TermsPage/LongTermsForm';
import FormAlertWithSubmitButton from '../../components/FormAlertWithSubmitButton';
import walletTermsPropTypes from './walletTermsPropTypes';
import * as ErrorUtils from '../../libs/ErrorUtils';

const propTypes = {
    /** Comes from Onyx. Information about the terms for the wallet */
    walletTerms: walletTermsPropTypes,

    ...withLocalizePropTypes,
};

const defaultProps = {
    walletTerms: {},
};

const TermsStep = ({translate, walletTerms}) => {
    const [hasAcceptedDisclosure, setHasAcceptedDisclosure] = useState(false);
    const [hasAcceptedPrivacyPolicyAndWalletAgreement, setHasAcceptedPrivacyPolicyAndWalletAgreement] = useState(false);
    const [error, setError] = useState(false);

    const errorMessage = useMemo(() => error ? 'common.error.acceptTerms' : ErrorUtils.getLatestErrorMessage(walletTerms) || '', [error, walletTerms]);

    const toggleDisclosure = () => {
        setHasAcceptedDisclosure(!hasAcceptedDisclosure);
    };

    const togglePrivacyPolicy = () => {
        setHasAcceptedPrivacyPolicyAndWalletAgreement(!hasAcceptedPrivacyPolicyAndWalletAgreement);
    };

    /** clear error */
    useEffect(() => {
        if (!hasAcceptedDisclosure || !hasAcceptedPrivacyPolicyAndWalletAgreement) {
            return;
        }

        setError(false);
    }, [hasAcceptedDisclosure, hasAcceptedPrivacyPolicyAndWalletAgreement]);

    return (
        <>
            <HeaderWithCloseButton
                title={translate('termsStep.headerTitle')}
                onCloseButtonPress={() => Navigation.dismissModal()}
            />
            <ScrollView
                style={styles.flex1}
                contentContainerStyle={styles.ph5}
            >
                <ShortTermsForm />
                <LongTermsForm />
                <CheckboxWithLabel
                    style={[styles.mb4, styles.mt4]}
                    isChecked={hasAcceptedDisclosure}
                    onInputChange={toggleDisclosure}
                    LabelComponent={() => (
                        <Text>
                            {`${translate('termsStep.haveReadAndAgree')}`}
                            <TextLink href="https://use.expensify.com/esignagreement">{`${translate('termsStep.electronicDisclosures')}.`}</TextLink>
                        </Text>
                    )}
                />
                <CheckboxWithLabel
                    isChecked={hasAcceptedPrivacyPolicyAndWalletAgreement}
                    onInputChange={togglePrivacyPolicy}
                    LabelComponent={() => (
                        <Text>
                            {`${translate('termsStep.agreeToThe')} `}

                            <TextLink href="https://use.expensify.com/privacy">{`${translate('common.privacy')} `}</TextLink>

                            {`${translate('common.and')} `}

                            <TextLink href="https://use.expensify.com/walletagreement">{`${translate('termsStep.walletAgreement')}.`}</TextLink>
                        </Text>
                    )}
                />
                <FormAlertWithSubmitButton
                    buttonText={translate('termsStep.enablePayments')}
                    onSubmit={() => {
                        if (!hasAcceptedDisclosure || !hasAcceptedPrivacyPolicyAndWalletAgreement) {
                            setError(true);
                            return;
                        }

                        setError(false);
                        BankAccounts.acceptWalletTerms({
                            hasAcceptedTerms: hasAcceptedDisclosure && hasAcceptedPrivacyPolicyAndWalletAgreement,
                            chatReportID: walletTerms.chatReportID,
                        });
                    }}
                    message={errorMessage}
                    isAlertVisible={error || Boolean(errorMessage)}
                    containerStyles={[styles.mh0, styles.mv4]}
                />
            </ScrollView>
        </>
    );
};

TermsStep.displayName = "TermsPage";
TermsStep.propTypes = propTypes;
TermsStep.defaultProps = defaultProps;
export default compose(
    withLocalize,
    withOnyx({
        walletTerms: {
            key: ONYXKEYS.WALLET_TERMS,
        },
    }),
)(TermsStep);
