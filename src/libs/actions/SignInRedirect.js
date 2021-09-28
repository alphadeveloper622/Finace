import Onyx from 'react-native-onyx';
import ONYXKEYS from '../../ONYXKEYS';
import * as Pusher from '../Pusher/pusher';
import UnreadIndicatorUpdater from '../UnreadIndicatorUpdater';
import PushNotification from '../Notification/PushNotification';
import Timers from '../Timers';
import SignoutManager from '../SignoutManager';

let currentActiveClients;
Onyx.connect({
    key: ONYXKEYS.ACTIVE_CLIENTS,
    callback: (val) => {
        currentActiveClients = !val ? [] : val;
    },
});

let currentPreferredLocale;
Onyx.connect({
    key: ONYXKEYS.NVP_PREFERRED_LOCALE,
    callback: val => currentPreferredLocale = val,
});

/**
 * Put any logic that needs to run when we are signed out here. This can be triggered when the current tab or another tab signs out.
 */
function cleanupSession() {
    // We got signed out in this tab or another so clean up any subscriptions and timers
    UnreadIndicatorUpdater.stopListeningForReportChanges();
    PushNotification.deregister();
    PushNotification.clearNotifications();
    Pusher.disconnect();
    Timers.clearAll();
}

SignoutManager.onSignout(cleanupSession);

/**
 * Clears the Onyx store and redirects to the sign in page.
 * Normally this method would live in Session.js, but that would cause a circular dependency with Network.js.
 *
 * @param {String} [errorMessage] error message to be displayed on the sign in page
 */
function redirectToSignIn(errorMessage) {
    const activeClients = currentActiveClients;
    const preferredLocale = currentPreferredLocale;
    cleanupSession();
    SignoutManager.notifyTabsOfSignout();

    // Clearing storage discards the authToken. This causes a redirect to the SignIn screen
    Onyx.clear()
        .then(() => {
            if (preferredLocale) {
                Onyx.set(ONYXKEYS.NVP_PREFERRED_LOCALE, preferredLocale);
            }
            if (activeClients && activeClients.length > 0) {
                Onyx.set(ONYXKEYS.ACTIVE_CLIENTS, activeClients);
            }

            const session = {
                // We must set the authToken to null so that signOut action is triggered across other clients
                authToken: null,
            };

            if (errorMessage) {
                session.error = errorMessage;
            }

            // `Onyx.clear` reinitialize the Onyx instance with initial values so use `Onyx.merge` instead of `Onyx.set`.
            Onyx.merge(ONYXKEYS.SESSION, session);
        });
}

export default redirectToSignIn;
