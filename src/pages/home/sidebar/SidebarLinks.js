import React from 'react';
import {View, ScrollView} from 'react-native';
import _ from 'underscore';
import PropTypes from 'prop-types';
import lodashOrderby from 'lodash.orderby';
import get from 'lodash.get';
import {withOnyx} from 'react-native-onyx';
import styles from '../../../styles/StyleSheet';
import Text from '../../../components/Text';
import ONYXKEYS from '../../../ONYXKEYS';
import ChatSwitcherView from './ChatSwitcherView';
import SafeAreaInsetPropTypes from '../../SafeAreaInsetPropTypes';
import compose from '../../../libs/compose';
import {withRouter} from '../../../libs/Router';
import ChatLinkRow from './ChatLinkRow';

const propTypes = {
    // These are from withRouter
    // eslint-disable-next-line react/forbid-prop-types
    match: PropTypes.object.isRequired,

    // Toggles the hamburger menu open and closed
    onLinkClick: PropTypes.func.isRequired,

    // Safe area insets required for mobile devices margins
    insets: SafeAreaInsetPropTypes.isRequired,

    /* Onyx Props */

    // List of reports
    reports: PropTypes.objectOf(PropTypes.shape({
        reportID: PropTypes.number,
        reportName: PropTypes.string,
        unreadActionCount: PropTypes.number,
    })),

    // List of draft comments. We don't know the shape, since the keys include the report numbers
    // eslint-disable-next-line react/forbid-prop-types
    comments: PropTypes.object,

    isChatSwitcherActive: PropTypes.bool,

    // List of users' personal details
    personalDetails: PropTypes.objectOf(PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatarURL: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
    })),
};

const defaultProps = {
    reports: {},
    isChatSwitcherActive: false,
    comments: {},
    personalDetails: {},
};

const SidebarLinks = (props) => {
    const {onLinkClick} = props;
    const reportIDInUrl = parseInt(props.match.params.reportID, 10);
    const sortedReports = lodashOrderby(props.reports, [
        'isPinned',
        'reportName'
    ], [
        'desc',
        'asc'
    ]);

    // Filter the reports so that the only reports shown are pinned, unread, have draft
    // comments (but are not the open one), and the one matching the URL
    // eslint-disable-next-line max-len
    const reportsToDisplay = _.filter(sortedReports, report => (report.isPinned || (report.unreadActionCount > 0) || report.reportID === reportIDInUrl || (report.reportID !== reportIDInUrl && get(props.comments, `${ONYXKEYS.COLLECTION.REPORT_DRAFT_COMMENT}${report.reportID}`, '').length > 0)));

    // Update styles to hide the report links if they should not be visible
    const sidebarLinksStyle = !props.isChatSwitcherActive
        ? [styles.sidebarListContainer]
        : [styles.sidebarListContainer, styles.dNone];
    return (
        <View style={[styles.flex1, {marginTop: props.insets.top}]}>
            <View style={[styles.sidebarHeader]}>
                <ChatSwitcherView
                    onLinkClick={onLinkClick}
                    isChatSwitcherActive={props.isChatSwitcherActive}
                />
            </View>
            <ScrollView
                style={sidebarLinksStyle}
                bounces={false}
                indicatorStyle="white"
                stickyHeaderIndices={[0]}
            >
                <View style={[styles.sidebarListItem]}>
                    <Text style={[styles.sidebarListHeader]}>
                        Chats
                    </Text>
                </View>
                {/* A report will not have a report name if it hasn't been fetched from the server yet */}
                {/* so nothing is rendered */}
                {_.map(reportsToDisplay, (report) => {
                    const participantDetails = get(report, 'participants.length', 0) === 1
                        ? get(props.personalDetails, report.participants[0], '') : '';
                    return report.reportName && (
                        <ChatLinkRow
                            key={report.reportID}
                            option={{
                                text: participantDetails ? participantDetails.displayName : report.reportName,
                                alternateText: participantDetails ? participantDetails.login : '',
                                type: participantDetails ? 'user' : 'report',
                                icon: participantDetails ? participantDetails.avatarURL : '',
                                login: participantDetails ? participantDetails.login : '',
                                reportID: report.reportID,
                                isUnread: report.unreadActionCount > 0,

                                // eslint-disable-next-line max-len
                                hasDraftComment: report.reportID !== reportIDInUrl && get(props.comments, `${ONYXKEYS.COLLECTION.REPORT_DRAFT_COMMENT}${report.reportID}`, '').length > 0
                            }}
                            onSelectRow={onLinkClick}
                            optionIsFocused={report.reportID === reportIDInUrl}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

SidebarLinks.propTypes = propTypes;
SidebarLinks.defaultProps = defaultProps;
SidebarLinks.displayName = 'SidebarLinks';

export default compose(
    withRouter,
    withOnyx({
        reports: {
            key: ONYXKEYS.COLLECTION.REPORT,
        },
        comments: {
            key: ONYXKEYS.COLLECTION.REPORT_DRAFT_COMMENT,
        },
        personalDetails: {
            key: ONYXKEYS.PERSONAL_DETAILS,
        },
    }),
)(SidebarLinks);
