import React from 'react';
import PropTypes from 'prop-types';
import {withOnyx} from 'react-native-onyx';
import * as Expensicons from './Icon/Expensicons';
import withLocalize, {withLocalizePropTypes} from './withLocalize';
import compose from '../libs/compose';
import ONYXKEYS from '../ONYXKEYS';
import CONST from '../CONST';
import withWindowDimensions from './withWindowDimensions';
import Permissions from '../libs/Permissions';
import PopoverMenu from './PopoverMenu';

const propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    anchorPosition: PropTypes.shape({
        top: PropTypes.number,
        left: PropTypes.number,
    }),

    /** Username for PayPal.Me */
    payPalMeUsername: PropTypes.string,

    /** Should we show the Paypal option */
    shouldShowPaypal: PropTypes.bool,

    /** List of betas available to current user */
    betas: PropTypes.arrayOf(PropTypes.string),

    ...withLocalizePropTypes,
};

const defaultProps = {
    anchorPosition: {},
    payPalMeUsername: '',
    shouldShowPaypal: true,
    betas: [],
};

const AddPaymentMethodMenu = props => (
    <PopoverMenu
        isVisible={props.isVisible}
        onClose={props.onClose}
        anchorPosition={props.anchorPosition}
        onItemSelected={() => props.onClose()}
        menuItems={[
            {
                text: props.translate('common.bankAccount'),
                icon: Expensicons.Bank,
                onSelected: () => props.onItemSelected(CONST.PAYMENT_METHODS.BANK_ACCOUNT),
            },
            ...(Permissions.canUseWallet(props.betas) ? [{
                text: props.translate('common.debitCard'),
                icon: Expensicons.CreditCard,
                onSelected: () => props.onItemSelected(CONST.PAYMENT_METHODS.DEBIT_CARD),
            },
            ] : []),
            ...(props.shouldShowPaypal && !props.payPalMeUsername ? [{
                text: props.translate('common.payPalMe'),
                icon: Expensicons.PayPal,
                onSelected: () => props.onItemSelected(CONST.PAYMENT_METHODS.PAYPAL),
            },
            ] : []),
        ]}
    />
);

AddPaymentMethodMenu.propTypes = propTypes;
AddPaymentMethodMenu.defaultProps = defaultProps;

export default compose(
    withWindowDimensions,
    withLocalize,
    withOnyx({
        payPalMeUsername: {
            key: ONYXKEYS.NVP_PAYPAL_ME_ADDRESS,
        },
        betas: {
            key: ONYXKEYS.BETAS,
        },
    }),
)(AddPaymentMethodMenu);
