import _ from 'lodash';
import lodashGet from 'lodash/get';
import {Keyboard} from 'react-native';
import {
    CommonActions, getPathFromState, StackActions,
} from '@react-navigation/native';
import Onyx from 'react-native-onyx';
import Log from '../Log';
import DomUtils from '../DomUtils';
import linkTo from './linkTo';
import ROUTES from '../../ROUTES';
import ONYXKEYS from '../../ONYXKEYS';
import linkingConfig from './linkingConfig';
import navigationRef from './navigationRef';
import NAVIGATORS from '../../NAVIGATORS';

let resolveNavigationIsReadyPromise;
const navigationIsReadyPromise = new Promise((resolve) => {
    resolveNavigationIsReadyPromise = resolve;
});

let resolveDrawerIsReadyPromise;
let drawerIsReadyPromise = new Promise((resolve) => {
    resolveDrawerIsReadyPromise = resolve;
});

let resolveReportScreenIsReadyPromise;
let reportScreenIsReadyPromise = new Promise((resolve) => {
    resolveReportScreenIsReadyPromise = resolve;
});

let isLoggedIn = false;
let pendingRoute = null;

Onyx.connect({
    key: ONYXKEYS.SESSION,
    callback: val => isLoggedIn = Boolean(val && val.authToken),
});

// This flag indicates that we're trying to deeplink to a report when react-navigation is not fully loaded yet.
// If true, this flag will cause the drawer to start in a closed state (which is not the default for small screens)
// so it doesn't cover the report we're trying to link to.
let didTapNotificationBeforeReady = false;

function setDidTapNotification() {
    if (navigationRef.isReady()) {
        return;
    }

    didTapNotificationBeforeReady = true;
}

/**
 * @param {String} methodName
 * @param {Object} params
 * @returns {Boolean}
 */
function canNavigate(methodName, params = {}) {
    if (navigationRef.isReady()) {
        return true;
    }
    Log.hmmm(`[Navigation] ${methodName} failed because navigation ref was not yet ready`, params);
    return false;
}

/**
 * @private
 * @param {Boolean} shouldOpenDrawer
 */
function goBack() {
    if (!canNavigate('goBack')) {
        return;
    }

    if (!navigationRef.current.canGoBack()) {
        Log.hmmm('[Navigation] Unable to go back');
        return;
    }
    navigationRef.current.goBack();
}

/**
 * We navigate to the certains screens with a custom action so that we can preserve the browser history in web. react-navigation does not handle this well
 * and only offers a "mobile" navigation paradigm e.g. in order to add a history item onto the browser history stack one would need to use the "push" action.
 * However, this is not performant as it would keep stacking ReportScreen instances (which are quite expensive to render).
 * We're also looking to see if we have a participants route since those also have a reportID param, but do not have the problem described above and should not use the custom action.
 *
 * @param {String} route
 * @returns {Boolean}
 */
function isDrawerRoute(route) {
    const {reportID, isSubReportPageRoute} = ROUTES.parseReportRouteParams(route);
    return reportID && !isSubReportPageRoute;
}

/**
 * Main navigation method for redirecting to a route.
 * @param {String} route
 */
function navigate(route = ROUTES.HOME) {
    if (!canNavigate('navigate', {route})) {
        // Store intended route if the navigator is not yet available,
        // we will try again after the NavigationContainer is ready
        Log.hmmm(`[Navigation] Container not yet ready, storing route as pending: ${route}`);
        pendingRoute = route;
        return;
    }

    // A pressed navigation button will remain focused, keeping its tooltip visible, even if it's supposed to be out of view.
    // To prevent that we blur the button manually (especially for Safari, where the mouse leave event is missing).
    // More info: https://github.com/Expensify/App/issues/13146
    DomUtils.blurActiveElement();

    linkTo(navigationRef.current, route);
}

/**
 * Update route params for the specified route.
 *
 * @param {Object} params
 * @param {String} routeKey
 */
function setParams(params, routeKey) {
    navigationRef.current.dispatch({
        ...CommonActions.setParams(params),
        source: routeKey,
    });
}

/**
 * Dismisses the last modal stack if there is any
 */
function dismissModal() {
    if (!canNavigate('dismissModal')) {
        return;
    }
    const rootState = navigationRef.getRootState();
    const lastRoute = _.last(rootState.routes);
    if (lastRoute.name === NAVIGATORS.RIGHT_MODAL_NAVIGATOR || lastRoute.name === NAVIGATORS.FULL_SCREEN_NAVIGATOR) {
        navigationRef.current.dispatch(StackActions.pop());
    } else {
        Log.hmmm('[Navigation] dismissModal failed because there is no modal stack to dismiss');
    }
}

/**
 * Returns the current active route
 * @returns {String}
 */
function getActiveRoute() {
    return navigationRef.current && navigationRef.current.getCurrentRoute().name
        ? getPathFromState(navigationRef.current.getState(), linkingConfig.config)
        : '';
}

/**
 * @returns {String}
 */
function getReportIDFromRoute() {
    if (!navigationRef.current) {
        return '';
    }

    const drawerState = lodashGet(navigationRef.current.getState(), ['routes', 0, 'state']);
    const reportRoute = lodashGet(drawerState, ['routes', 0]);
    return lodashGet(reportRoute, ['params', 'reportID'], '');
}

/**
 * Check whether the passed route is currently Active or not.
 *
 * Building path with getPathFromState since navigationRef.current.getCurrentRoute().path
 * is undefined in the first navigation.
 *
 * @param {String} routePath Path to check
 * @return {Boolean} is active
 */
function isActiveRoute(routePath) {
    // We remove First forward slash from the URL before matching
    return getActiveRoute().substring(1) === routePath;
}

/**
 * Navigate to the route that we originally intended to go to
 * but the NavigationContainer was not ready when navigate() was called
 */
function goToPendingRoute() {
    if (pendingRoute === null) {
        return;
    }
    Log.hmmm(`[Navigation] Container now ready, going to pending route: ${pendingRoute}`);
    navigate(pendingRoute);
    pendingRoute = null;
}

/**
 * @returns {Promise}
 */
function isNavigationReady() {
    return navigationIsReadyPromise;
}

function setIsNavigationReady() {
    goToPendingRoute();
    resolveNavigationIsReadyPromise();
}

function resetIsReportScreenReadyPromise() {
    reportScreenIsReadyPromise = new Promise((resolve) => {
        resolveReportScreenIsReadyPromise = resolve;
    });
}

/**
 * @returns {Promise}
 */
function isDrawerReady() {
    return drawerIsReadyPromise;
}

function setIsDrawerReady() {
    resolveDrawerIsReadyPromise();
}

function resetDrawerIsReadyPromise() {
    drawerIsReadyPromise = new Promise((resolve) => {
        resolveDrawerIsReadyPromise = resolve;
    });
}

function isReportScreenReady() {
    return reportScreenIsReadyPromise;
}

function setIsReportScreenIsReady() {
    resolveReportScreenIsReadyPromise();
}

function getTopmostReportId() {
    const state = navigationRef.getState();
    const topmostCentralPane = state.routes.findLast(route => route.name === 'CentralPaneNavigator');
    if (!topmostCentralPane) {
        return;
    }
    const hasDirectReportIdParam = topmostCentralPane.params && topmostCentralPane.params.params && topmostCentralPane.params.params.reportID;

    if (!topmostCentralPane.state && !hasDirectReportIdParam) {
        return;
    }

    if (hasDirectReportIdParam) {
        return topmostCentralPane.params.params.reportID;
    }

    const topmostReportId = topmostCentralPane.state.routes.findLast(route => route.name === 'Report').params.reportID;
    return topmostReportId;
}

export default {
    canNavigate,
    navigate,
    setParams,
    dismissModal,
    isActiveRoute,
    getActiveRoute,
    goBack,
    setDidTapNotification,
    isNavigationReady,
    setIsNavigationReady,
    getReportIDFromRoute,
    isDrawerReady,
    setIsDrawerReady,
    resetDrawerIsReadyPromise,
    resetIsReportScreenReadyPromise,
    isDrawerRoute,
    isReportScreenReady,
    setIsReportScreenIsReady,
    getTopmostReportId,
};

export {
    navigationRef,
};
