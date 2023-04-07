import _ from 'underscore';
import {StackRouter} from '@react-navigation/native';
import NAVIGATORS from '../../../../NAVIGATORS';

/**
 * @param {Object} state - react-navigation state
 * @returns {boolean}
 */
const isAtLeastOneCentralPaneNavigatorInState = state => _.find(state.routes, r => r.name === NAVIGATORS.CENTRAL_PANE_NAVIGATOR);

/**
 * Adds report route without any specific reportID to the state.
 * The report screen will self set proper reportID param basing on the helper function findLastAccessedReport (look at the ReportScreenWraper for more info)
 * @param {Object} state - react-navigation state
 */
const addCentralPaneNavigatorRoute = (state) => {
    state.routes.splice(1, 0, {name: NAVIGATORS.CENTRAL_PANE_NAVIGATOR});
    // eslint-disable-next-line no-param-reassign
    state.index = state.routes.length - 1;
};

const CustomRouter = (options) => {
    const stackRouter = StackRouter(options);

    return {
        ...stackRouter,
        getRehydratedState(partialState, {routeNames, routeParamList}) {
            // Make sure that there is at least one CentralPaneNavigator (ReportScreen by default) in the state if this is a wide layout
            if (!isAtLeastOneCentralPaneNavigatorInState(partialState) && !options.isSmallScreenWidth) {
                // If we added a route we need to make sure that the state.stale is true to generate new key for this route
                // eslint-disable-next-line no-param-reassign
                partialState.stale = true;
                addCentralPaneNavigatorRoute(partialState);
            }
            const state = stackRouter.getRehydratedState(partialState, {routeNames, routeParamList});
            return state;
        },
    };
};

export default CustomRouter;
