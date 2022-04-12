import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../../../components/Text';
import styles from '../../../styles/styles';
import withLocalize, {withLocalizePropTypes} from '../../../components/withLocalize';
import * as Expensicons from '../../../components/Icon/Expensicons';
import * as Illustrations from '../../../components/Icon/Illustrations';
import Section from '../../../components/Section';
import Navigation from '../../../libs/Navigation/Navigation';
import ROUTES from '../../../ROUTES';
import WorkspaceInvoicesFirstSection from './WorkspaceInvoicesFirstSection';
import Button from '../../../components/Button';

const propTypes = {
    /** The policy ID currently being configured */
    policyID: PropTypes.string.isRequired,

    ...withLocalizePropTypes,
};

const WorkspaceInvoicesNoVBAView = props => (
    <>
        <WorkspaceInvoicesFirstSection policyID={props.policyID} />

        <Section
            title={props.translate('workspace.invoices.unlockOnlineInvoiceCollection')}
            icon={Illustrations.JewelBoxGreen}
        >
            <View style={[styles.mv4]}>
                <Text>{props.translate('workspace.invoices.unlockNoVBACopy')}</Text>
            </View>
            <Button
                text={props.translate('workspace.common.bankAccount')}
                onPress={() => Navigation.navigate(ROUTES.getWorkspaceBankAccountRoute(props.policyID))}
                icon={Expensicons.Bank}
                style={[styles.mt4]}
                iconStyles={[styles.mr5]}
                shouldShowRightIcon
                xLarge
                success
            />
        </Section>
    </>
);

WorkspaceInvoicesNoVBAView.propTypes = propTypes;
WorkspaceInvoicesNoVBAView.displayName = 'WorkspaceInvoicesNoVBAView';

export default withLocalize(WorkspaceInvoicesNoVBAView);
