import _ from 'underscore';
import React from 'react';
import PropTypes from 'prop-types';
import {withOnyx} from 'react-native-onyx';
import ONYXKEYS from '../../ONYXKEYS';
import CONST from '../../CONST';
import {withNetwork} from '../OnyxProvider';
import compose from '../../libs/compose';
import ReportPreview from './ReportPreview';
import reportActionPropTypes from '../../pages/home/report/reportActionPropTypes';
import networkPropTypes from '../networkPropTypes';
import iouReportPropTypes from '../../pages/iouReportPropTypes';
import IOUPreview from './IOUPreview';
import Navigation from '../../libs/Navigation/Navigation';
import ROUTES from '../../ROUTES';
import styles from '../../styles/styles';
import * as IOUUtils from '../../libs/IOUUtils';

const propTypes = {
    /** All the data of the action */
    action: PropTypes.shape(reportActionPropTypes).isRequired,

    /** The ID of the associated chatReport */
    chatReportID: PropTypes.string.isRequired,

    /** The ID of the associated request report */
    requestReportID: PropTypes.string.isRequired,

    /** Is this IOUACTION the most recent? */
    isMostRecentIOUReportAction: PropTypes.bool.isRequired,

    /** Popover context menu anchor, used for showing context menu */
    contextMenuAnchor: PropTypes.shape({current: PropTypes.elementType}),

    /** Callback for updating context menu active state, used for showing context menu */
    checkIfContextMenuActive: PropTypes.func,

    /* Onyx Props */
    /** chatReport associated with iouReport */
    chatReport: PropTypes.shape({
        /** The participants of this report */
        participants: PropTypes.arrayOf(PropTypes.string),

        /** Whether the chat report has an outstanding IOU */
        hasOutstandingIOU: PropTypes.bool.isRequired,
    }),

    /** IOU report data object */
    iouReport: iouReportPropTypes,

    /** Array of report actions for this report */
    reportActions: PropTypes.objectOf(PropTypes.shape(reportActionPropTypes)),

    /** Whether the IOU is hovered so we can modify its style */
    isHovered: PropTypes.bool,

    network: networkPropTypes.isRequired,
};

const defaultProps = {
    contextMenuAnchor: undefined,
    checkIfContextMenuActive: () => {},
    chatReport: {
        participants: [],
    },
    iouReport: {},
    reportActions: {},
    isHovered: false,
};

const IOUAction = (props) => {
    const hasMultipleParticipants = props.chatReport.participants.length > 1;
    const onIOUPreviewPressed = () => {
        if (hasMultipleParticipants) {
            Navigation.navigate(ROUTES.getReportParticipantsRoute(props.chatReportID));
        } else {
            Navigation.navigate(ROUTES.getIouDetailsRoute(props.chatReportID, props.action.originalMessage.IOUReportID));
        }
    };

    let shouldShowPendingConversionMessage = false;
    if (
        !_.isEmpty(props.iouReport) &&
        !_.isEmpty(props.reportActions) &&
        props.chatReport.hasOutstandingIOU &&
        props.isMostRecentIOUReportAction &&
        props.action.pendingAction === CONST.RED_BRICK_ROAD_PENDING_ACTION.ADD &&
        props.network.isOffline
    ) {
        shouldShowPendingConversionMessage = IOUUtils.isIOUReportPendingCurrencyConversion(props.reportActions, props.iouReport);
    }

    return (
        <>
            <IOUPreview
                iouReportID={props.requestReportID}
                chatReportID={props.chatReportID}
                isBillSplit={hasMultipleParticipants}
                isIOUAction
                action={props.action}
                contextMenuAnchor={props.contextMenuAnchor}
                checkIfContextMenuActive={props.checkIfContextMenuActive}
                shouldShowPendingConversionMessage={shouldShowPendingConversionMessage}
                onPreviewPressed={onIOUPreviewPressed}
                containerStyles={[styles.cursorPointer, props.isHovered ? styles.iouPreviewBoxHover : undefined]}
                isHovered={props.isHovered}
            />
            {props.isMostRecentIOUReportAction && !hasMultipleParticipants && (
                <ReportPreview
                    action={props.action}
                    chatReportID={props.chatReportID}
                    iouReportID={props.requestReportID}
                    contextMenuAnchor={props.contextMenuAnchor}
                    onViewDetailsPressed={onIOUPreviewPressed}
                    checkIfContextMenuActive={props.checkIfContextMenuActive}
                    isHovered={props.isHovered}
                />
            )}
        </>
    );
};

IOUAction.propTypes = propTypes;
IOUAction.defaultProps = defaultProps;
IOUAction.displayName = 'IOUAction';

export default compose(
    withOnyx({
        chatReport: {
            key: ({chatReportID}) => `${ONYXKEYS.COLLECTION.REPORT}${chatReportID}`,
        },
        iouReport: {
            key: ({requestReportID}) => `${ONYXKEYS.COLLECTION.REPORT}${requestReportID}`,
        },
        reportActions: {
            key: ({chatReportID}) => `${ONYXKEYS.COLLECTION.REPORT_ACTIONS}${chatReportID}`,
            canEvict: false,
        },
    }),
    withNetwork(),
)(IOUAction);
