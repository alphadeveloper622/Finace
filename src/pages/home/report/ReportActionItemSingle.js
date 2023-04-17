import lodashGet from 'lodash/get';
import React from 'react';
import {View, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Str from 'expensify-common/lib/str';
import reportActionPropTypes from './reportActionPropTypes';
import ReportActionItemFragment from './ReportActionItemFragment';
import styles from '../../../styles/styles';
import ReportActionItemDate from './ReportActionItemDate';
import Avatar from '../../../components/Avatar';
import personalDetailsPropType from '../../personalDetailsPropType';
import compose from '../../../libs/compose';
import withLocalize, {withLocalizePropTypes} from '../../../components/withLocalize';
import Navigation from '../../../libs/Navigation/Navigation';
import ROUTES from '../../../ROUTES';
import {withPersonalDetails} from '../../../components/OnyxProvider';
import Text from '../../../components/Text';
import Tooltip from '../../../components/Tooltip';
import ControlSelection from '../../../libs/ControlSelection';
import * as ReportUtils from '../../../libs/ReportUtils';
import OfflineWithFeedback from '../../../components/OfflineWithFeedback';
import CONST from '../../../CONST';
import * as Expensicons from '../../../components/Icon/Expensicons';
import Icon from '../../../components/Icon';
import DisplayNames from "../../../components/DisplayNames";

const propTypes = {
    /** All the data of the action */
    action: PropTypes.shape(reportActionPropTypes).isRequired,

    /** All of the personalDetails */
    personalDetails: PropTypes.objectOf(personalDetailsPropType),

    /** Styles for the outermost View */
    // eslint-disable-next-line react/forbid-prop-types
    wrapperStyles: PropTypes.arrayOf(PropTypes.object),

    /** Children view component for this action item */
    children: PropTypes.node.isRequired,

    /** Show header for action */
    showHeader: PropTypes.bool,

    ...withLocalizePropTypes,
};

const defaultProps = {
    personalDetails: {},
    wrapperStyles: [styles.chatItem],
    showHeader: true,
};

const showUserDetails = (email) => {
    Navigation.navigate(ROUTES.getDetailsRoute(email));
};

const ReportActionItemSingle = (props) => {
    const actorEmail = props.action.actorEmail.replace(CONST.REGEX.MERGED_ACCOUNT_PREFIX, '');
    const {
        avatar,
        displayName,
        login,
        pendingFields,
    } = props.personalDetails[actorEmail] || {};
    const avatarSource = ReportUtils.getAvatar(avatar, actorEmail);

    // Since the display name for a report action message is delivered with the report history as an array of fragments
    // we'll need to take the displayName from personal details and have it be in the same format for now. Eventually,
    // we should stop referring to the report history items entirely for this information.
    const personArray = displayName
        ? [{type: 'TEXT', text: Str.isSMSLogin(login) ? props.toLocalPhone(displayName) : displayName}]
        : props.action.person;

    // We only create tooltips for the first 10 users or so since some reports have hundreds of users, causing performance to degrade.
    const isMultipleParticipant = lodashGet(props.action, 'whisperedTo', 0) > 1;
    const displayNamesWithTooltips = ReportUtils.getDisplayNamesWithTooltips((props.action.whisperedTo || []).slice(0, 10), isMultipleParticipant);

    return (
        <View style={[props.wrapperStyles, props.action.isWhisper ? styles.whisper : undefined]}>
            {props.action.isWhisper && (
                <View style={[styles.chatItem]}>
                    <View style={[styles.chatItemRight, styles.mr3]}>
                        <Icon src={Expensicons.Eye} />
                    </View>
                    <Text style={[styles.chatItemMessageHeaderTimestamp]}>
                        {props.translate('reportActionContextMenu.onlyVisible')}
                    </Text>
                    <DisplayNames
                        fullTitle={ReportUtils.getWhisperDisplayNames(props.action.participants || [])}
                        displayNamesWithTooltips={displayNamesWithTooltips}
                        tooltipEnabled
                        numberOfLines={1}
                        textStyles={[styles.chatItemMessageHeaderTimestamp, styles.pre]}
                        shouldUseFullTitle={false}
                    />
                </View>
            )}
            <View style={[styles.chatItem]}>
                <Pressable
                    style={[styles.alignSelfStart, styles.mr3]}
                    onPressIn={ControlSelection.block}
                    onPressOut={ControlSelection.unblock}
                    onPress={() => showUserDetails(actorEmail)}
                >
                    <Tooltip text={actorEmail}>
                        <OfflineWithFeedback
                            pendingAction={lodashGet(pendingFields, 'avatar', null)}
                        >
                            <Avatar
                                containerStyles={[styles.actionAvatar]}
                                source={avatarSource}
                            />
                        </OfflineWithFeedback>
                    </Tooltip>
                </Pressable>
                <View style={[styles.chatItemRight]}>
                    {props.showHeader ? (
                        <View style={[styles.chatItemMessageHeader]}>
                            <Pressable
                                style={[styles.flexShrink1, styles.mr1]}
                                onPressIn={ControlSelection.block}
                                onPressOut={ControlSelection.unblock}
                                onPress={() => showUserDetails(actorEmail)}
                            >
                                {_.map(personArray, (fragment, index) => (
                                    <ReportActionItemFragment
                                        key={`person-${props.action.reportActionID}-${index}`}
                                        fragment={fragment}
                                        tooltipText={actorEmail}
                                        isAttachment={props.action.isAttachment}
                                        isLoading={props.action.isLoading}
                                        isSingleLine
                                    />
                                ))}
                            </Pressable>
                            <ReportActionItemDate created={props.action.created} />
                        </View>
                    ) : null}
                    {props.children}
                </View>
            </View>
        </View>
    );
};

ReportActionItemSingle.propTypes = propTypes;
ReportActionItemSingle.defaultProps = defaultProps;
ReportActionItemSingle.displayName = 'ReportActionItemSingle';

export default compose(
    withLocalize,
    withPersonalDetails(),
)(ReportActionItemSingle);
