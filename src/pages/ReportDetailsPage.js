import React from 'react';
import PropTypes from 'prop-types';
import {withOnyx} from 'react-native-onyx';
import _ from 'underscore';
import {View, ScrollView, Pressable} from 'react-native';
import lodashGet from 'lodash/get';
import RoomHeaderAvatars from '../components/RoomHeaderAvatars';
import compose from '../libs/compose';
import withLocalize, {withLocalizePropTypes} from '../components/withLocalize';
import ONYXKEYS from '../ONYXKEYS';
import ScreenWrapper from '../components/ScreenWrapper';
import Navigation from '../libs/Navigation/Navigation';
import HeaderWithCloseButton from '../components/HeaderWithCloseButton';
import styles from '../styles/styles';
import DisplayNames from '../components/DisplayNames';
import * as OptionsListUtils from '../libs/OptionsListUtils';
import * as ReportUtils from '../libs/ReportUtils';
import * as PolicyUtils from '../libs/PolicyUtils';
import * as Report from '../libs/actions/Report';
import participantPropTypes from '../components/participantPropTypes';
import * as Expensicons from '../components/Icon/Expensicons';
import ROUTES from '../ROUTES';
import MenuItem from '../components/MenuItem';
import Text from '../components/Text';
import CONST from '../CONST';
import reportPropTypes from './reportPropTypes';
import withReportOrNotFound from './home/report/withReportOrNotFound';
import FullPageNotFoundView from '../components/BlockingViews/FullPageNotFoundView';

const propTypes = {
    ...withLocalizePropTypes,

    /** The report currently being looked at */
    report: reportPropTypes.isRequired,

    /** The policies which the user has access to and which the report could be tied to */
    policies: PropTypes.shape({
        /** Name of the policy */
        name: PropTypes.string,
    }),

    /** Route params */
    route: PropTypes.shape({
        params: PropTypes.shape({
            /** Report ID passed via route r/:reportID/details */
            reportID: PropTypes.string,
        }),
    }).isRequired,

    /** Personal details of all the users */
    personalDetails: PropTypes.objectOf(participantPropTypes),
};

const defaultProps = {
    policies: {},
    personalDetails: {},
};

const ReportDetailsPage = (props) => {
    const getPolicy = () => props.policies[`${ONYXKEYS.COLLECTION.POLICY}${props.report.policyID}`];

    const getMenuItems = () => {
        const menuItems = [
            {
                key: CONST.REPORT_DETAILS_MENU_ITEM.SHARE_CODE,
                translationKey: 'common.shareCode',
                icon: Expensicons.QrCode,
                action: () => Navigation.navigate(ROUTES.getReportShareCodeRoute(props.report.reportID)),
            },
        ];

        if (ReportUtils.isArchivedRoom(props.report)) {
            return [];
        }

        if (lodashGet(props.report, 'participants', []).length) {
            menuItems.push({
                key: CONST.REPORT_DETAILS_MENU_ITEM.MEMBERS,
                translationKey: 'common.members',
                icon: Expensicons.Users,
                subtitle: lodashGet(props.report, 'participants', []).length,
                action: () => {
                    Navigation.navigate(ROUTES.getReportParticipantsRoute(props.report.reportID));
                },
            });
        }

        if (ReportUtils.isPolicyExpenseChat(props.report) || ReportUtils.isChatRoom(props.report) || ReportUtils.isThread(props.report)) {
            menuItems.push({
                key: CONST.REPORT_DETAILS_MENU_ITEM.SETTINGS,
                translationKey: 'common.settings',
                icon: Expensicons.Gear,
                action: () => {
                    Navigation.navigate(ROUTES.getReportSettingsRoute(props.report.reportID));
                },
            });
        }

        const policy = getPolicy();
        const isThread = ReportUtils.isThread(props.report);
        if (ReportUtils.isUserCreatedPolicyRoom(props.report) || ReportUtils.canLeaveRoom(props.report, !_.isEmpty(policy)) || isThread) {
            menuItems.push({
                key: CONST.REPORT_DETAILS_MENU_ITEM.LEAVE_ROOM,
                translationKey: isThread ? 'common.leaveThread' : 'common.leaveRoom',
                icon: Expensicons.Exit,
                action: () => Report.leaveRoom(props.report.reportID),
            });
        }

        return menuItems;
    };

    const isPolicyExpenseChat = ReportUtils.isPolicyExpenseChat(props.report);
    const isChatRoom = ReportUtils.isChatRoom(props.report);
    const isThread = ReportUtils.isThread(props.report);
    const chatRoomSubtitle = ReportUtils.getChatRoomSubtitle(props.report);
    const participants = lodashGet(props.report, 'participants', []);
    const isMultipleParticipant = participants.length > 1;
    const displayNamesWithTooltips = ReportUtils.getDisplayNamesWithTooltips(OptionsListUtils.getPersonalDetailsForLogins(participants, props.personalDetails), isMultipleParticipant);
    const menuItems = getMenuItems();
    const isPolicyAdmin = PolicyUtils.isPolicyAdmin(getPolicy());
    const chatRoomSubtitleText = (
        <Text
            style={[styles.sidebarLinkText, styles.optionAlternateText, styles.textLabelSupporting, styles.mb2, styles.pre]}
            numberOfLines={1}
        >
            {chatRoomSubtitle}
        </Text>
    );

    return (
        <ScreenWrapper>
            <FullPageNotFoundView shouldShow={_.isEmpty(props.report)}>
                <HeaderWithCloseButton
                    title={props.translate('common.details')}
                    onBackButtonPress={() => Navigation.goBack()}
                    onCloseButtonPress={() => Navigation.dismissModal()}
                />
                <ScrollView style={[styles.flex1]}>
                    <View style={[styles.m5]}>
                        <View style={styles.reportDetailsTitleContainer}>
                            <View style={styles.mb4}>
                                <RoomHeaderAvatars icons={ReportUtils.getIcons(props.report, props.personalDetails, props.policies)} />
                            </View>
                            <View style={[styles.reportDetailsRoomInfo, styles.mw100]}>
                                <View style={[styles.alignSelfCenter, styles.w100]}>
                                    <DisplayNames
                                        fullTitle={ReportUtils.getReportName(props.report)}
                                        displayNamesWithTooltips={displayNamesWithTooltips}
                                        tooltipEnabled
                                        numberOfLines={1}
                                        textStyles={[styles.textHeadline, styles.mb2, styles.textAlignCenter, styles.pre]}
                                        shouldUseFullTitle={isChatRoom || isPolicyExpenseChat || isThread}
                                    />
                                </View>
                                {isPolicyAdmin ? (
                                    <Pressable
                                        onPress={() => {
                                            Navigation.navigate(ROUTES.getWorkspaceInitialRoute(props.report.policyID));
                                        }}
                                    >
                                        {chatRoomSubtitleText}
                                    </Pressable>
                                ) : (
                                    chatRoomSubtitleText
                                )}
                            </View>
                        </View>
                    </View>
                    {_.map(menuItems, (item) => {
                        const brickRoadIndicator =
                            ReportUtils.hasReportNameError(props.report) && item.key === CONST.REPORT_DETAILS_MENU_ITEM.SETTINGS ? CONST.BRICK_ROAD_INDICATOR_STATUS.ERROR : '';
                        return (
                            <MenuItem
                                key={item.key}
                                title={props.translate(item.translationKey)}
                                subtitle={item.subtitle}
                                icon={item.icon}
                                onPress={item.action}
                                shouldShowRightIcon
                                brickRoadIndicator={brickRoadIndicator}
                            />
                        );
                    })}
                </ScrollView>
            </FullPageNotFoundView>
        </ScreenWrapper>
    );
};

ReportDetailsPage.displayName = 'ReportDetailsPage';
ReportDetailsPage.propTypes = propTypes;
ReportDetailsPage.defaultProps = defaultProps;

export default compose(
    withLocalize,
    withReportOrNotFound,
    withOnyx({
        personalDetails: {
            key: ONYXKEYS.PERSONAL_DETAILS,
        },
        policies: {
            key: ONYXKEYS.COLLECTION.POLICY,
        },
    }),
)(ReportDetailsPage);
