import React from 'react';
import _ from 'underscore';
import {View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {withOnyx} from 'react-native-onyx';
import reportActionPropTypes from './home/report/reportActionPropTypes';
import withLocalize, {withLocalizePropTypes} from '../components/withLocalize';
import compose from '../libs/compose';
import ONYXKEYS from '../ONYXKEYS';
import ScreenWrapper from '../components/ScreenWrapper';
import HeaderWithCloseButton from '../components/HeaderWithCloseButton';
import styles from '../styles/styles';
import Navigation from '../libs/Navigation/Navigation';
import Text from '../components/Text';
import * as Expensicons from '../components/Icon/Expensicons';
import MenuItem from '../components/MenuItem';
import * as Report from '../libs/actions/Report';
import CONST from '../CONST';

const propTypes = {
    /** Array of report actions for this report */
    reportActions: PropTypes.shape(reportActionPropTypes),

    /** Route params */
    route: PropTypes.shape({
        params: PropTypes.shape({
            /** Report ID passed via route r/:reportID/:reportActionID */
            reportID: PropTypes.string,

            /** ReportActionID passed via route r/:reportID/:reportActionID */
            reportActionID: PropTypes.string,
        }),
    }).isRequired,

    ...withLocalizePropTypes,
};

const defaultProps = {
    reportActions: {},
};

/**
 * Get the reportID for the associated chatReport
 *
 * @param {Object} route
 * @param {Object} route.params
 * @param {String} route.params.reportID
 * @returns {String}
 */
function getReportID(route) {
    return route.params.reportID.toString();
}

function FlagCommentPage(props) {
    const reportAction = props.reportActions[`${props.route.params.reportActionID.toString()}`];
    const severities = [
        {
            severity: CONST.MODERATION.FLAG_SEVERITY_SPAM,
            name: props.translate('moderation.spam'),
            icon: Expensicons.FlagLevelOne,
            description: props.translate('moderation.spamDescription'),
        },
        {
            severity: CONST.MODERATION.FLAG_SEVERITY_INCONSIDERATE,
            name: props.translate('moderation.inconsiderate'),
            icon: Expensicons.FlagLevelOne,
            description: props.translate('moderation.inconsiderateDescription'),
        },
        {
            severity: CONST.MODERATION.FLAG_SEVERITY_INTIMIDATION,
            name: props.translate('moderation.intimidation'),
            icon: Expensicons.FlagLevelTwo,
            description: props.translate('moderation.intimidationDescription'),
        },
        {
            severity: CONST.MODERATION.FLAG_SEVERITY_BULLYING,
            name: props.translate('moderation.bullying'),
            icon: Expensicons.FlagLevelTwo,
            description: props.translate('moderation.bullyingDescription'),
        },
        {
            severity: CONST.MODERATION.FLAG_SEVERITY_HARASSMENT,
            name: props.translate('moderation.harassment'),
            icon: Expensicons.FlagLevelThree,
            description: props.translate('moderation.harassmentDescription'),
        },
        {
            severity: CONST.MODERATION.FLAG_SEVERITY_ASSAULT,
            name: props.translate('moderation.assault'),
            icon: Expensicons.FlagLevelThree,
            description: props.translate('moderation.assaultDescription'),
        },
    ];

    const flagComment = (severity) => {
        Report.flagComment(props.route.params.reportID, reportAction, severity);
        Navigation.dismissModal(true);
    };

    const severityMenuItems = _.map(severities, (item, index) => (
        <MenuItem
            key={`${item.severity}_${index}`}
            icon={item.icon}
            shouldShowRightIcon
            title={item.name}
            description={item.description}
            onPress={() => flagComment(item.severity)}
            wrapperStyle={[styles.borderBottom]}
        />
    ));

    return (
        <ScreenWrapper includeSafeAreaPaddingBottom={false}>
            {({safeAreaPaddingBottomStyle}) => (
                <>
                    <HeaderWithCloseButton
                        title={props.translate('reportActionContextMenu.flagAsOffensive')}
                        onCloseButtonPress={() => Navigation.dismissModal(true)}
                    />
                    <ScrollView
                        contentContainerStyle={safeAreaPaddingBottomStyle}
                        style={[styles.settingsPageBackground]}
                    >
                        <View style={styles.pageWrapper}>
                            <View style={[styles.settingsPageBody, styles.alignItemsCenter]}>
                                <Text style={[styles.baseFontStyle]}>{props.translate('moderation.flagDescription')}</Text>
                            </View>
                        </View>
                        <Text style={[styles.ph5, styles.textLabelSupporting, styles.mb1]}>{props.translate('moderation.chooseAReason')}</Text>
                        {severityMenuItems}
                    </ScrollView>
                </>
            )}
        </ScreenWrapper>
    );
}

FlagCommentPage.propTypes = propTypes;
FlagCommentPage.defaultProps = defaultProps;
FlagCommentPage.displayName = 'FlagCommentPage';

export default compose(
    withLocalize,
    withOnyx({
        reportActions: {
            key: ({route}) => `${ONYXKEYS.COLLECTION.REPORT_ACTIONS}${getReportID(route)}`,
            canEvict: false,
        },
    }),
)(FlagCommentPage);
