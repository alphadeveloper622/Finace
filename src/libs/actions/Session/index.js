import Onyx from 'react-native-onyx';
import _ from 'underscore';
import lodashGet from 'lodash/get';
import ONYXKEYS from '../../../ONYXKEYS';
import redirectToSignIn from '../SignInRedirect';
import CONFIG from '../../../CONFIG';
import Log from '../../Log';
import PushNotification from '../../Notification/PushNotification';
import Timing from '../Timing';
import CONST from '../../../CONST';
import * as Localize from '../../Localize';
import Timers from '../../Timers';
import * as Pusher from '../../Pusher/pusher';
import * as Authentication from '../../Authentication';
import * as Welcome from '../Welcome';
import * as API from '../../API';
import * as NetworkStore from '../../Network/NetworkStore';
import * as Report from '../Report';
import DateUtils from '../../DateUtils';
import Navigation from '../../Navigation/Navigation';

let credentials = {};
Onyx.connect({
    key: ONYXKEYS.CREDENTIALS,
    callback: val => credentials = val || {},
});

/**
 * Manage push notification subscriptions on sign-in/sign-out.
 *
 * On Android, AuthScreens unmounts when the app is closed with the back button so we manage the
 * push subscription when the session changes here.
 */
Onyx.connect({
    key: ONYXKEYS.NVP_PRIVATE_PUSH_NOTIFICATION_ID,
    callback: (notificationID) => {
        if (notificationID) {
            PushNotification.register(notificationID);

            // Prevent issue where report linking fails after users switch accounts without closing the app
            PushNotification.init();
            Report.subscribeToReportCommentPushNotifications();
        } else {
            PushNotification.deregister();
            PushNotification.clearNotifications();
        }
    },
});

/**
 * Clears the Onyx store and redirects user to the sign in page
 */
function signOut() {
    Log.info('Flushing logs before signing out', true, {}, true);

    API.write('LogOut', {
        // Send current authToken because we will immediately clear it once triggering this command
        authToken: NetworkStore.getAuthToken(),
        partnerUserID: lodashGet(credentials, 'autoGeneratedLogin', ''),
        partnerName: CONFIG.EXPENSIFY.PARTNER_NAME,
        partnerPassword: CONFIG.EXPENSIFY.PARTNER_PASSWORD,
        shouldRetry: false,
    });

    Timing.clearData();
}

function signOutAndRedirectToSignIn() {
    signOut();
    redirectToSignIn();
    Log.info('Redirecting to Sign In because signOut() was called');
}

/**
 * Resend the validation link to the user that is validating their account
 *
 * @param {String} [login]
 */
function resendValidationLink(login = credentials.login) {
    const optimisticData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: true,
            errors: null,
            message: null,
        },
    }];
    const successData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: false,
            message: Localize.translateLocal('resendValidationForm.linkHasBeenResent'),
        },
    }];
    const failureData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: false,
            message: null,
        },
    }];

    API.write('RequestAccountValidationLink', {email: login}, {optimisticData, successData, failureData});
}

/**
 * Request a new validate / magic code for user to sign in via passwordless flow
 *
 * @param {String} [login]
 */
function resendValidateCode(login = credentials.login) {
    const optimisticData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: true,
            errors: null,
            message: null,
        },
    }];
    const successData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: false,
            message: Localize.translateLocal('validateCodeForm.codeSent'),
        },
    }];
    const failureData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: false,
            message: null,
        },
    }];
    API.write('RequestNewValidateCode', {email: login}, {optimisticData, successData, failureData});
}

/**
 * Request a new validate / magic code for user to sign in automatically with the link
 *
 * @param {String} [login]
 */
function resendLinkWithValidateCode(login = credentials.login) {
    const optimisticData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: true,
            message: null,
        },
    }];
    const successData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: false,
            message: Localize.translateLocal('validateCodeModal.successfulNewCodeRequest'),
        },
    }];
    const failureData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: false,
            message: null,
        },
    }];
    API.write('RequestNewValidateCode', {email: login}, {optimisticData, successData, failureData});
}

/**
 * Checks the API to see if an account exists for the given login
 *
 * @param {String} login
 */
function beginSignIn(login) {
    const optimisticData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                ...CONST.DEFAULT_ACCOUNT_DATA,
                isLoading: true,
            },
        },
    ];

    const successData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                isLoading: false,
            },
        },
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.CREDENTIALS,
            value: {
                validateCode: null,
            },
        },
    ];

    const failureData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                isLoading: false,
                errors: {
                    [DateUtils.getMicroseconds()]: Localize.translateLocal('loginForm.cannotGetAccountDetails'),
                },
            },
        },
    ];

    API.read('BeginSignIn', {email: login}, {optimisticData, successData, failureData});
}

/**
 * Will create a temporary login for the user in the passed authenticate response which is used when
 * re-authenticating after an authToken expires.
 *
 * @param {String} email
 * @param {String} authToken
 */
function signInWithShortLivedAuthToken(email, authToken) {
    const optimisticData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                ...CONST.DEFAULT_ACCOUNT_DATA,
                isLoading: true,
            },
        },
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.IS_TOKEN_VALID,
            value: true,
        },
    ];

    const successData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                isLoading: false,
            },
        },
    ];

    const failureData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                isLoading: false,
            },
        },
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.IS_TOKEN_VALID,
            value: false,
        },
    ];

    // If the user is signing in with a different account from the current app, should not pass the auto-generated login as it may be tied to the old account.
    // scene 1: the user is transitioning to newDot from a different account on oldDot.
    // scene 2: the user is transitioning to desktop app from a different account on web app.
    const oldPartnerUserID = credentials.login === email ? credentials.autoGeneratedLogin : '';
    // eslint-disable-next-line rulesdir/no-api-side-effects-method
    API.makeRequestWithSideEffects(
        'SignInWithShortLivedAuthToken',
        {authToken, oldPartnerUserID},
        {optimisticData, successData, failureData},
        null,
    ).then((response) => {
        if (response) {
            return;
        }
        Navigation.navigate();
    });
}

/**
 * Sign the user into the application. This will first authenticate their account
 * then it will create a temporary login for them which is used when re-authenticating
 * after an authToken expires.
 *
 * @param {String} password This will be removed after passwordless beta ends
 * @param {String} [validateCode] Code for passwordless login
 * @param {String} [twoFactorAuthCode]
 * @param {String} [preferredLocale] Indicates which language to use when the user lands in the app
 */
function signIn(password, validateCode, twoFactorAuthCode, preferredLocale = CONST.DEFAULT_LOCALE) {
    const optimisticData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                ...CONST.DEFAULT_ACCOUNT_DATA,
                isLoading: true,
            },
        },
    ];

    const successData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                isLoading: false,
            },
        },
    ];

    const failureData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                isLoading: false,
            },
        },
    ];

    const params = {twoFactorAuthCode, email: credentials.login, preferredLocale};

    // Conditionally pass a password or validateCode to command since we temporarily allow both flows
    if (validateCode) {
        params.validateCode = validateCode;
    } else {
        params.password = password;
    }

    API.write('SigninUser', params, {optimisticData, successData, failureData});
}

function signInWithValidateCode(accountID, validateCode, twoFactorAuthCode) {
    const optimisticData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                ...CONST.DEFAULT_ACCOUNT_DATA,
                isLoading: true,
            },
        },
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.SESSION,
            value: {autoAuthState: CONST.AUTO_AUTH_STATE.SIGNING_IN},
        },
    ];

    const successData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {isLoading: false},
        },
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.CREDENTIALS,
            value: {
                accountID,
                validateCode,
            },
        },
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.SESSION,
            value: {autoAuthState: CONST.AUTO_AUTH_STATE.JUST_SIGNED_IN},
        },
    ];

    const failureData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {isLoading: false},
        },
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.SESSION,
            value: {autoAuthState: CONST.AUTO_AUTH_STATE.FAILED},
        },
    ];

    API.write('SigninUserWithLink', {
        accountID,
        validateCode,
        twoFactorAuthCode,
    }, {optimisticData, successData, failureData});
}

/**
 * Initializes the state of the automatic authentication when the user clicks on a magic link.
 *
 * This method is called in componentDidMount event of the lifecycle.
 * When the user gets authenticated, the component is unmounted and then remounted
 * when AppNavigator switches from PublicScreens to AuthScreens.
 * That's the reason why autoAuthState initialization is skipped while the last state is SIGNING_IN.
 *
 * @param {string} cachedAutoAuthState
 */
function initAutoAuthState(cachedAutoAuthState) {
    Onyx.merge(
        ONYXKEYS.SESSION,
        {
            autoAuthState: cachedAutoAuthState === CONST.AUTO_AUTH_STATE.SIGNING_IN
                ? CONST.AUTO_AUTH_STATE.JUST_SIGNED_IN : CONST.AUTO_AUTH_STATE.NOT_STARTED,
        },
    );
}

/**
 * User forgot the password so let's send them the link to reset their password
 */
function resetPassword() {
    API.write('RequestPasswordReset', {
        email: credentials.login,
    },
    {
        optimisticData: [
            {
                onyxMethod: CONST.ONYX.METHOD.MERGE,
                key: ONYXKEYS.ACCOUNT,
                value: {
                    errors: null,
                    forgotPassword: true,
                    message: null,
                },
            },
        ],
    });
}

function resendResetPassword() {
    API.write('ResendRequestPasswordReset', {
        email: credentials.login,
    },
    {
        optimisticData: [
            {
                onyxMethod: CONST.ONYX.METHOD.MERGE,
                key: ONYXKEYS.ACCOUNT,
                value: {
                    isLoading: true,
                    forgotPassword: true,
                    message: null,
                    errors: null,
                },
            },
        ],
        successData: [
            {
                onyxMethod: CONST.ONYX.METHOD.MERGE,
                key: ONYXKEYS.ACCOUNT,
                value: {
                    isLoading: false,
                    message: Localize.translateLocal('resendValidationForm.linkHasBeenResent'),
                },
            },
        ],
        failureData: [
            {
                onyxMethod: CONST.ONYX.METHOD.MERGE,
                key: ONYXKEYS.ACCOUNT,
                value: {
                    isLoading: false,
                },
            },
        ],
    });
}

function invalidateCredentials() {
    Onyx.merge(ONYXKEYS.CREDENTIALS, {autoGeneratedLogin: '', autoGeneratedPassword: ''});
}

function invalidateAuthToken() {
    NetworkStore.setAuthToken('pizza');
    Onyx.merge(ONYXKEYS.SESSION, {authToken: 'pizza'});
}

/**
 * Clear the credentials and partial sign in session so the user can taken back to first Login step
 */
function clearSignInData() {
    Onyx.multiSet({
        [ONYXKEYS.ACCOUNT]: null,
        [ONYXKEYS.CREDENTIALS]: {},
    });
}

/**
 * Put any logic that needs to run when we are signed out here. This can be triggered when the current tab or another tab signs out.
 */
function cleanupSession() {
    Pusher.disconnect();
    Timers.clearAll();
    Welcome.resetReadyCheck();
}

function clearAccountMessages() {
    Onyx.merge(ONYXKEYS.ACCOUNT, {
        success: '',
        errors: null,
        message: null,
        isLoading: false,
    });
}

/**
 * Updates a password and authenticates them
 * @param {Number} accountID
 * @param {String} validateCode
 * @param {String} password
 */
function updatePasswordAndSignin(accountID, validateCode, password) {
    const optimisticData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                isLoading: true,
                errors: null,
            },
        },
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.SESSION,
            value: {
                errors: null,
            },
        },
    ];

    const successData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                isLoading: false,
                errors: null,
            },
        },
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.SESSION,
            value: {
                errors: null,
            },
        },
    ];

    const failureData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                isLoading: false,
            },
        },
    ];

    API.write('UpdatePasswordAndSignin', {
        accountID, validateCode, password,
    }, {optimisticData, successData, failureData});
}

// It's necessary to throttle requests to reauthenticate since calling this multiple times will cause Pusher to
// reconnect each time when we only need to reconnect once. This way, if an authToken is expired and we try to
// subscribe to a bunch of channels at once we will only reauthenticate and force reconnect Pusher once.
const reauthenticatePusher = _.throttle(() => {
    Log.info('[Pusher] Re-authenticating and then reconnecting');
    Authentication.reauthenticate('AuthenticatePusher')
        .then(Pusher.reconnect)
        .catch(() => {
            console.debug(
                '[PusherConnectionManager]',
                'Unable to re-authenticate Pusher because we are offline.',
            );
        });
}, 5000, {trailing: false});

/**
 * @param {String} socketID
 * @param {String} channelName
 * @param {Function} callback
 */
function authenticatePusher(socketID, channelName, callback) {
    Log.info('[PusherAuthorizer] Attempting to authorize Pusher', false, {channelName});

    // We use makeRequestWithSideEffects here because we need to authorize to Pusher (an external service) each time a user connects to any channel.
    // eslint-disable-next-line rulesdir/no-api-side-effects-method
    API.makeRequestWithSideEffects('AuthenticatePusher', {
        socket_id: socketID,
        channel_name: channelName,
        shouldRetry: false,
        forceNetworkRequest: true,
    }).then((response) => {
        if (response.jsonCode === CONST.JSON_CODE.NOT_AUTHENTICATED) {
            Log.hmmm('[PusherAuthorizer] Unable to authenticate Pusher because authToken is expired');
            callback(new Error('Pusher failed to authenticate because authToken is expired'), {auth: ''});

            // Attempt to refresh the authToken then reconnect to Pusher
            reauthenticatePusher();
            return;
        }

        if (response.jsonCode !== CONST.JSON_CODE.SUCCESS) {
            Log.hmmm('[PusherAuthorizer] Unable to authenticate Pusher for reason other than expired session');
            callback(new Error(`Pusher failed to authenticate because code: ${response.jsonCode} message: ${response.message}`), {auth: ''});
            return;
        }

        Log.info(
            '[PusherAuthorizer] Pusher authenticated successfully',
            false,
            {channelName},
        );
        callback(null, response);
    }).catch((error) => {
        Log.hmmm('[PusherAuthorizer] Unhandled error: ', {channelName, error});
        callback(new Error('AuthenticatePusher request failed'), {auth: ''});
    });
}

/**
 * Request a new validation link / magic code to unlink an unvalidated secondary login from a primary login
 */
function requestUnlinkValidationLink() {
    const optimisticData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: true,
            errors: null,
            message: null,
        },
    }];
    const successData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: false,
            message: Localize.translateLocal('unlinkLoginForm.linkSent'),
        },
    }];
    const failureData = [{
        onyxMethod: CONST.ONYX.METHOD.MERGE,
        key: ONYXKEYS.ACCOUNT,
        value: {
            isLoading: false,
            message: null,
        },
    }];

    API.write('RequestUnlinkValidationLink', {email: credentials.login}, {optimisticData, successData, failureData});
}

function unlinkLogin(accountID, validateCode) {
    const optimisticData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                ...CONST.DEFAULT_ACCOUNT_DATA,
                isLoading: true,
            },
        },
    ];

    const successData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                isLoading: false,
            },
        },
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.CREDENTIALS,
            value: {
                accountID,
                validateCode,
            },
        },
    ];

    const failureData = [
        {
            onyxMethod: CONST.ONYX.METHOD.MERGE,
            key: ONYXKEYS.ACCOUNT,
            value: {
                isLoading: false,
            },
        },
    ];

    API.write('UnlinkLogin', {accountID, validateCode}, {optimisticData, successData, failureData});
}

export {
    beginSignIn,
    updatePasswordAndSignin,
    signIn,
    signInWithValidateCode,
    initAutoAuthState,
    signInWithShortLivedAuthToken,
    cleanupSession,
    signOut,
    signOutAndRedirectToSignIn,
    resendValidationLink,
    resendValidateCode,
    resendLinkWithValidateCode,
    resetPassword,
    resendResetPassword,
    requestUnlinkValidationLink,
    unlinkLogin,
    clearSignInData,
    clearAccountMessages,
    authenticatePusher,
    reauthenticatePusher,
    invalidateCredentials,
    invalidateAuthToken,
};
