import Ion from '../Ion';
import IONKEYS from '../../IONKEYS';

let isSidebarShown;
Ion.connect({
    key: IONKEYS.IS_SIDEBAR_SHOWN,
    callback: val => isSidebarShown = val,
});

/**
 * Hide the sidebar, if it is shown.
 */
function hide() {
    if (isSidebarShown) {
        Ion.set(IONKEYS.IS_SIDEBAR_SHOWN, false);
    }
}

/**
 * Show the sidebar, if it is hidden.
 */
function show() {
    if (!isSidebarShown) {
        Ion.set(IONKEYS.IS_SIDEBAR_SHOWN, true);
    }
}

export {
    hide,
    show,
};
