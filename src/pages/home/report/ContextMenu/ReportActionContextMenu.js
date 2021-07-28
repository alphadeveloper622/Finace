import React from 'react';

const contextMenuRef = React.createRef();

/**
 * Show the ReportActionContextMenu modal popover.
 *
 * @param {Object} [event] - A press event.
 * @param {string} [selection] - A copy text.
 * @param {Element} contextMenuAnchor - popoverAnchor
 * @param {Number} reportID - Active Report Id
 * @param {Object} reportAction - ReportAction for ContextMenu
 * @param {String} draftMessage - ReportAction Draftmessage
 * @param {Function} [onShown=() => {}] - Run a callback when Menu is shown
 * @memberof PopoverReportActionContextMenu
 */
function showContextMenu(event, selection, contextMenuAnchor, reportID, reportAction, draftMessage, onShown = () => {}) {
    if (!contextMenuRef.current) {
        return;
    }
    contextMenuRef.current.showContextMenu(
        event,
        selection,
        contextMenuAnchor,
        reportID,
        reportAction,
        draftMessage,
        onShown,
    );
}

/**
     * Hide the ReportActionContextMenu modal popover.
     * Hides the popover menu with an optional delay
     * @param {Boolean} shouldDelay - whether the menu should close after a delay
     * @param {Function} [onHideCallback=() => {}] - Callback to be called after Context Menu is completely hidden
     */
function hideContextMenu(shouldDelay, onHideCallback = () => {}) {
    if (!contextMenuRef.current) {
        return;
    }
    if (!shouldDelay) {
        contextMenuRef.current.hideContextMenu(onHideCallback);

        return;
    }
    setTimeout(() => contextMenuRef.current.hideContextMenu(onHideCallback), 800);
}

function hideDeleteConfirmModal() {
    if (!contextMenuRef.current) {
        return;
    }
    contextMenuRef.current.hideDeleteConfirmModal();
}

/**
 * Opens the Confirm delete action modal
 * @param {Number} reportID
 * @param {Object} reportAction
 * @memberof PopoverReportActionContextMenu
 */
function showDeleteConfirmModal(reportID, reportAction) {
    if (!contextMenuRef.current) {
        return;
    }
    contextMenuRef.current.showDeleteConfirmModal(reportID, reportAction);
}
function isActiveReportAction(actionId) {
    if (!contextMenuRef.current) {
        return;
    }
    contextMenuRef.current.isActiveReportAction(actionId);
}

export {
    contextMenuRef,
    showContextMenu,
    hideContextMenu,
    isActiveReportAction,
    showDeleteConfirmModal,
    hideDeleteConfirmModal,
};
