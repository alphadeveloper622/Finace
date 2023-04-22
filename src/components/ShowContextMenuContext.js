import React from 'react';
import * as ReportActionContextMenu from '../pages/home/report/ContextMenu/ReportActionContextMenu';
import * as ContextMenuActions from '../pages/home/report/ContextMenu/ContextMenuActions';

const ShowContextMenuContext = React.createContext({
    anchor: null,
    report: null,
    action: undefined,
    checkIfContextMenuActive: () => {},
});

ShowContextMenuContext.displayName = 'ShowContextMenuContext';

/**
 * Show the report action context menu.
 *
 * @param {Object} event - Press event object
 * @param {Element} anchor - Context menu anchor
 * @param {String} reportID - Active Report ID
 * @param {Object} action - ReportAction for ContextMenu
 * @param {Function} checkIfContextMenuActive Callback to update context menu active state
 * @param {Boolean} [isArchivedRoom=false] - Is the report an archived room
 */
function showContextMenuForReport(event, anchor, reportID, action, checkIfContextMenuActive, isArchivedRoom = false) {
    ReportActionContextMenu.showContextMenu(
        ContextMenuActions.CONTEXT_MENU_TYPES.REPORT_ACTION,
        event,
        '',
        anchor,
        reportID,
        action,
        '',
        checkIfContextMenuActive,
        checkIfContextMenuActive,
        isArchivedRoom,
    );
}

export {
    ShowContextMenuContext,
    showContextMenuForReport,
};
