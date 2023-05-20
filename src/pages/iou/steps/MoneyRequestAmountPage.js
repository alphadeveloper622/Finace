import React from 'react';
import {View, InteractionManager} from 'react-native';
import PropTypes from 'prop-types';
import lodashGet from 'lodash/get';
import _ from 'underscore';
import {withOnyx} from 'react-native-onyx';
import styles from '../../../styles/styles';
import BigNumberPad from '../../../components/BigNumberPad';
import Navigation from '../../../libs/Navigation/Navigation';
import ROUTES from '../../../ROUTES';
import withLocalize, {withLocalizePropTypes} from '../../../components/withLocalize';
import compose from '../../../libs/compose';
import * as OptionsListUtils from '../../../libs/OptionsListUtils';
import * as ReportUtils from '../../../libs/ReportUtils';
import * as IOUUtils from '../../../libs/IOUUtils';
import * as CurrencyUtils from '../../../libs/CurrencyUtils';
import Button from '../../../components/Button';
import CONST from '../../../CONST';
import * as DeviceCapabilities from '../../../libs/DeviceCapabilities';
import TextInputWithCurrencySymbol from '../../../components/TextInputWithCurrencySymbol';
import ScreenWrapper from '../../../components/ScreenWrapper';
import FullPageNotFoundView from '../../../components/BlockingViews/FullPageNotFoundView';
import withMoneyRequest, {moneyRequestPropTypes} from '../withMoneyRequest';
import withNavigation from '../../../components/withNavigation';
import ModalHeader from '../ModalHeader';
import ONYXKEYS from '../../../ONYXKEYS';
import personalDetailsPropType from '../../personalDetailsPropType';
import reportPropTypes from '../../reportPropTypes';

const propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            iouType: PropTypes.string,
            reportID: PropTypes.string,
        }),
    }),

    /** The report on which the request is initiated on */
    report: reportPropTypes,

    /** Personal details of all users */
    personalDetails: personalDetailsPropType,

    moneyRequest: moneyRequestPropTypes.isRequired,

    ...withLocalizePropTypes,
};

const defaultProps = {
    route: {
        params: {
            iouType: '',
            reportID: '',
        },
    },
    report: {},
    personalDetails: {},
};
class MoneyRequestAmountPage extends React.Component {
    constructor(props) {
        super(props);

        this.updateAmountNumberPad = this.updateAmountNumberPad.bind(this);
        this.updateLongPressHandlerState = this.updateLongPressHandlerState.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.stripCommaFromAmount = this.stripCommaFromAmount.bind(this);
        this.stripSpacesFromAmount = this.stripSpacesFromAmount.bind(this);
        this.focusTextInput = this.focusTextInput.bind(this);
        this.navigateToCurrencySelectionPage = this.navigateToCurrencySelectionPage.bind(this);
        this.amountViewID = 'amountView';
        this.numPadContainerViewID = 'numPadContainerView';
        this.numPadViewID = 'numPadView';
        this.iouType = lodashGet(props.route, 'params.iouType', '');
        this.reportID = lodashGet(props.route, 'params.reportID', '');
        this.isEditing = lodashGet(props.route, 'path', '').includes('amount');

        const selectedAmountAsString = props.moneyRequest.amount ? CurrencyUtils.convertToWholeUnit(props.moneyRequest.currency, props.moneyRequest.amount).toString() : '';
        this.state = {
            amount: selectedAmountAsString,
            selectedCurrencyCode: props.moneyRequest.currency,
            shouldUpdateSelection: true,
            selection: {
                start: selectedAmountAsString.length,
                end: selectedAmountAsString.length,
            },
        };
    }

    componentDidMount() {
        if (this.isEditing) {
            if (_.isEmpty(this.props.moneyRequest.participants) || this.props.moneyRequest.amount === 0) {
                Navigation.goBack();
                Navigation.navigate(ROUTES.getMoneyRequestRoute(this.iouType, this.reportID));
            }
        } else {
            // Set the money request participants based on the report participants
            const participants = ReportUtils.isPolicyExpenseChat(this.props.report)
                ? OptionsListUtils.getPolicyExpenseReportOptions(this.props.report)
                : OptionsListUtils.getParticipantsOptions(this.props.report, this.props.personalDetails);
            this.props.moneyRequest.setParticipants(_.map(participants, (participant) => ({...participant, selected: true})));
        }

        this.focusTextInput();

        // Focus automatically after navigating back from currency selector
        this.unsubscribeNavFocus = this.props.navigation.addListener('focus', () => {
            this.focusTextInput();
        });
    }

    componentDidUpdate(prevProps) {
        const prevCurrencyParam = lodashGet(prevProps.route.params, 'currency', '');
        const currencyParam = lodashGet(this.props.route.params, 'currency', '');
        if (currencyParam !== '' && prevCurrencyParam !== currencyParam) {
            this.setState({selectedCurrencyCode: currencyParam});
        }

        if (prevProps.moneyRequest.currency !== this.props.moneyRequest.currency) {
            this.setState({selectedCurrencyCode: this.props.moneyRequest.currency});
        }

        if (prevProps.moneyRequest.amount !== this.props.moneyRequest.amount) {
            const selectedAmountAsString = CurrencyUtils.convertToWholeUnit(this.props.moneyRequest.currency, this.props.moneyRequest.amount).toString();
            this.setState({
                amount: selectedAmountAsString,
                selection: {
                    start: selectedAmountAsString.length,
                    end: selectedAmountAsString.length,
                },
            });
        }
    }

    componentWillUnmount() {
        this.unsubscribeNavFocus();
    }

    /**
     * Event occurs when a user presses a mouse button over an DOM element.
     *
     * @param {Event} event
     * @param {Array<string>} nativeIds
     */
    onMouseDown(event, nativeIds) {
        const relatedTargetId = lodashGet(event, 'nativeEvent.target.id');
        if (!_.contains(nativeIds, relatedTargetId)) {
            return;
        }
        event.preventDefault();
        if (!this.textInput.isFocused()) {
            this.textInput.focus();
        }
    }

    /**
     * Returns the new selection object based on the updated amount's length
     *
     * @param {Object} oldSelection
     * @param {Number} prevLength
     * @param {Number} newLength
     * @returns {Object}
     */
    getNewSelection(oldSelection, prevLength, newLength) {
        const cursorPosition = oldSelection.end + (newLength - prevLength);
        return {start: cursorPosition, end: cursorPosition};
    }

    /**
     * Returns new state object if the updated amount is valid
     *
     * @param {Object} prevState
     * @param {String} newAmount - Changed amount from user input
     * @returns {Object}
     */
    getNewState(prevState, newAmount) {
        // Remove spaces from the newAmount value because Safari on iOS adds spaces when pasting a copied value
        // More info: https://github.com/Expensify/App/issues/16974
        const newAmountWithoutSpaces = this.stripSpacesFromAmount(newAmount);
        if (!this.validateAmount(newAmountWithoutSpaces)) {
            // Use a shallow copy of selection to trigger setSelection
            // More info: https://github.com/Expensify/App/issues/16385
            return {amount: prevState.amount, selection: {...prevState.selection}};
        }
        const selection = this.getNewSelection(prevState.selection, prevState.amount.length, newAmountWithoutSpaces.length);
        return {amount: this.stripCommaFromAmount(newAmountWithoutSpaces), selection};
    }

    /**
     * Get page title based on the iou type
     *
     * @returns {String}
     */
    getTitleForStep() {
        if (this.isEditing) {
            return this.props.translate('iou.amount');
        }
        const title = {
            [CONST.IOU.MONEY_REQUEST_TYPE.REQUEST]: this.props.translate('iou.requestMoney'),
            [CONST.IOU.MONEY_REQUEST_TYPE.SEND]: this.props.translate('iou.sendMoney'),
            [CONST.IOU.MONEY_REQUEST_TYPE.SPLIT]: this.props.translate('iou.splitBill'),
        };
        return title[this.iouType];
    }

    /**
     * Focus text input
     */
    focusTextInput() {
        // Component may not initialized due to navigation transitions
        // Wait until interactions are complete before trying to focus
        InteractionManager.runAfterInteractions(() => {
            // Focus text input
            if (!this.textInput) {
                return;
            }

            this.textInput.focus();
        });
    }

    /**
     * @param {String} amount
     * @returns {Number}
     */
    calculateAmountLength(amount) {
        const leadingZeroes = amount.match(/^0+/);
        const leadingZeroesLength = lodashGet(leadingZeroes, '[0].length', 0);
        const absAmount = parseFloat((this.stripCommaFromAmount(amount) * 100).toFixed(2)).toString();

        // The following logic will prevent users from pasting an amount that is excessively long in length,
        // which would result in the 'absAmount' value being expressed in scientific notation or becoming infinity.
        if (/\D/.test(absAmount)) {
            return CONST.IOU.AMOUNT_MAX_LENGTH + 1;
        }

        /*
        Return the sum of leading zeroes length and absolute amount length(including fraction digits).
        When the absolute amount is 0, add 2 to the leading zeroes length to represent fraction digits.
        */
        return leadingZeroesLength + (absAmount === '0' ? 2 : absAmount.length);
    }

    /**
     * Check if amount is a decimal up to 3 digits
     *
     * @param {String} amount
     * @returns {Boolean}
     */
    validateAmount(amount) {
        const decimalNumberRegex = new RegExp(/^\d+(,\d+)*(\.\d{0,2})?$/, 'i');
        return amount === '' || (decimalNumberRegex.test(amount) && this.calculateAmountLength(amount) <= CONST.IOU.AMOUNT_MAX_LENGTH);
    }

    /**
     * Strip comma from the amount
     *
     * @param {String} amount
     * @returns {String}
     */
    stripCommaFromAmount(amount) {
        return amount.replace(/,/g, '');
    }

    /**
     * Strip spaces from the amount
     *
     * @param {String} amount
     * @returns {String}
     */
    stripSpacesFromAmount(amount) {
        return amount.replace(/\s+/g, '');
    }

    /**
     * Adds a leading zero to the amount if user entered just the decimal separator
     *
     * @param {String} amount - Changed amount from user input
     * @returns {String}
     */
    addLeadingZero(amount) {
        return amount === '.' ? '0.' : amount;
    }

    /**
     * Update amount with number or Backspace pressed for BigNumberPad.
     * Validate new amount with decimal number regex up to 6 digits and 2 decimal digit to enable Next button
     *
     * @param {String} key
     */
    updateAmountNumberPad(key) {
        if (!this.textInput.isFocused()) {
            this.textInput.focus();
        }

        // Backspace button is pressed
        if (key === '<' || key === 'Backspace') {
            if (this.state.amount.length > 0) {
                this.setState((prevState) => {
                    const selectionStart = prevState.selection.start === prevState.selection.end ? prevState.selection.start - 1 : prevState.selection.start;
                    const amount = `${prevState.amount.substring(0, selectionStart)}${prevState.amount.substring(prevState.selection.end)}`;
                    return this.getNewState(prevState, amount);
                });
            }
            return;
        }

        this.setState((prevState) => {
            const amount = this.addLeadingZero(`${prevState.amount.substring(0, prevState.selection.start)}${key}${prevState.amount.substring(prevState.selection.end)}`);
            return this.getNewState(prevState, amount);
        });
    }

    /**
     * Update long press value, to remove items pressing on <
     *
     * @param {Boolean} value - Changed text from user input
     */
    updateLongPressHandlerState(value) {
        this.setState({shouldUpdateSelection: !value});
    }

    /**
     * Update amount on amount change
     * Validate new amount with decimal number regex up to 6 digits and 2 decimal digit
     *
     * @param {String} text - Changed text from user input
     */
    updateAmount(text) {
        this.setState((prevState) => {
            const amount = this.addLeadingZero(this.replaceAllDigits(text, this.props.fromLocaleDigit));
            return this.getNewState(prevState, amount);
        });
    }

    /**
     * Replaces each character by calling `convertFn`. If `convertFn` throws an error, then
     * the original character will be preserved.
     *
     * @param {String} text
     * @param {Function} convertFn - `this.props.fromLocaleDigit` or `this.props.toLocaleDigit`
     * @returns {String}
     */
    replaceAllDigits(text, convertFn) {
        return _.chain([...text])
            .map((char) => {
                try {
                    return convertFn(char);
                } catch {
                    return char;
                }
            })
            .join('')
            .value();
    }

    navigateToCurrencySelectionPage() {
        // Remove query from the route and encode it.
        const activeRoute = encodeURIComponent(Navigation.getActiveRoute().replace(/\?.*/, ''));
        Navigation.navigate(ROUTES.getMoneyRequestCurrencyRoute(this.iouType, this.reportID, this.state.selectedCurrencyCode, activeRoute));
    }

    navigateToNextPage() {
        if (this.isEditing) {
            Navigation.goBack();
            return;
        }

        // If a request is initiated on a report, skip the participants selection step and navigate to the confirmation page.
        if (this.reportID) {
            Navigation.navigate(ROUTES.getMoneyRequestConfirmationRoute(this.iouType, this.reportID));
            return;
        }
        Navigation.navigate(ROUTES.getMoneyRequestParticipantsRoute(this.iouType));
    }

    render() {
        const formattedAmount = this.replaceAllDigits(this.state.amount, this.props.toLocaleDigit);
        const buttonText = this.isEditing ? this.props.translate('common.save') : this.props.translate('common.next');

        return (
            <FullPageNotFoundView shouldShow={!IOUUtils.isValidType(this.iouType)}>
                <ScreenWrapper includeSafeAreaPaddingBottom={false}>
                    {({safeAreaPaddingBottomStyle}) => (
                        <View style={[styles.flex1, safeAreaPaddingBottomStyle]}>
                            <ModalHeader
                                title={this.getTitleForStep()}
                                shouldShowBackButton={this.isEditing}
                                onBackButtonPress={Navigation.goBack}
                            />
                            <View
                                nativeID={this.amountViewID}
                                onMouseDown={(event) => this.onMouseDown(event, [this.amountViewID])}
                                style={[styles.flex1, styles.flexRow, styles.w100, styles.alignItemsCenter, styles.justifyContentCenter]}
                            >
                                <TextInputWithCurrencySymbol
                                    formattedAmount={formattedAmount}
                                    onChangeAmount={this.updateAmount}
                                    onCurrencyButtonPress={this.navigateToCurrencySelectionPage}
                                    placeholder={this.props.numberFormat(0)}
                                    ref={(el) => (this.textInput = el)}
                                    selectedCurrencyCode={this.state.selectedCurrencyCode}
                                    selection={this.state.selection}
                                    onSelectionChange={(e) => {
                                        if (!this.state.shouldUpdateSelection) {
                                            return;
                                        }
                                        this.setState({selection: e.nativeEvent.selection});
                                    }}
                                />
                            </View>
                            <View
                                onMouseDown={(event) => this.onMouseDown(event, [this.numPadContainerViewID, this.numPadViewID])}
                                style={[styles.w100, styles.justifyContentEnd, styles.pageWrapper]}
                                nativeID={this.numPadContainerViewID}
                            >
                                {DeviceCapabilities.canUseTouchScreen() ? (
                                    <BigNumberPad
                                        nativeID={this.numPadViewID}
                                        numberPressed={this.updateAmountNumberPad}
                                        longPressHandlerStateChanged={this.updateLongPressHandlerState}
                                    />
                                ) : (
                                    <View />
                                )}

                                <Button
                                    success
                                    style={[styles.w100, styles.mt5]}
                                    onPress={() => {
                                        const amountInSmallestCurrencyUnits = CurrencyUtils.convertToSmallestUnit(this.state.selectedCurrencyCode, Number.parseFloat(this.state.amount));
                                        this.props.moneyRequest.setAmount(amountInSmallestCurrencyUnits);
                                        this.props.moneyRequest.setCurrency(this.state.selectedCurrencyCode);
                                        this.navigateToNextPage();
                                    }}
                                    pressOnEnter
                                    isDisabled={!this.state.amount.length || parseFloat(this.state.amount) < 0.01}
                                    text={buttonText}
                                />
                            </View>
                        </View>
                    )}
                </ScreenWrapper>
            </FullPageNotFoundView>
        );
    }
}

MoneyRequestAmountPage.propTypes = propTypes;
MoneyRequestAmountPage.defaultProps = defaultProps;

export default compose(
    withLocalize,
    withNavigation,
    withMoneyRequest,
    withOnyx({
        report: {
            key: ({route}) => `${ONYXKEYS.COLLECTION.REPORT}${lodashGet(route, 'params.reportID', '')}`,
        },
        personalDetails: {
            key: ONYXKEYS.PERSONAL_DETAILS,
        },
    }),
)(MoneyRequestAmountPage);
