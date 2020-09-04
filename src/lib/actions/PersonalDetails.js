import _ from 'underscore';
import Ion from '../Ion';
import {onReconnect, queueRequest} from '../Network';
import IONKEYS from '../../IONKEYS';
import md5 from '../md5';
import CONST from '../../CONST';

let currentUserEmail;
Ion.connect({
    key: IONKEYS.SESSION,
    callback: val => currentUserEmail = val.email;
});

/**
 * Returns the URL for a user's avatar and handles someone not having any avatar at all
 *
 * @param {object} personalDetails
 * @param {string} login
 * @returns {string}
 */
function getAvatar(personalDetails, login) {
    if (personalDetails && personalDetails.avatar) {
        return personalDetails.avatar.replace(/&d=404$/, '');
    }

    // There are 8 possible default avatars, so we choose which one this user has based
    // on a simple hash of their login (which is converted from HEX to INT)
    const loginHashBucket = (parseInt(md5(login).substring(0, 4), 16) % 8) + 1;
    return `${CONST.CLOUDFRONT_URL}/images/avatars/avatar_${loginHashBucket}.png`;
}

/**
 * Format personal details
 *
 * @param {Object} personalDetailsList
 * @return {Object}
 */
function formatPersonalDetails(personalDetailsList) {
    return _.reduce(personalDetailsList, (finalObject, personalDetails, login) => {
        // Form the details into something that has all the data in an easy to use format.
        const avatarURL = getAvatar(personalDetails, login);
        const firstName = personalDetails.firstName || '';
        const lastName = personalDetails.lastName || '';
        const fullName = `${firstName} ${lastName}`.trim();
        const displayName = fullName === '' ? login : fullName;
        const displayNameWithEmail = fullName === '' ? login : `${fullName} (${login})`;
        return {
            ...finalObject,
            [login]: {
                login,
                avatarURL,
                firstName,
                lastName,
                fullName,
                displayName,
                displayNameWithEmail,
            }
        };
    }, {});
}

/**
 * Get the personal details for our organization
 *
 * @returns {Promise}
 */
function fetch() {
    const requestPromise = queueRequest('Get', {
        returnValueList: 'personalDetailsList',
    })
        .then((data) => {
            const allPersonalDetails = formatPersonalDetails(data.personalDetailsList);
            Ion.merge(IONKEYS.PERSONAL_DETAILS, allPersonalDetails);

            // Get my personal details so they can be easily accessed and subscribed to on their own key
            Ion.merge(IONKEYS.MY_PERSONAL_DETAILS, allPersonalDetails[currentUserEmail] || {});
        })
        .catch((error) => {
            if (error.message === 'No login') {
                // eslint-disable-next-line no-console
                console.info('No email in store, not fetching personal details.');
                return;
            }

            console.error('Error fetching personal details', error);
        });

    // Refresh the personal details every 30 minutes
    setTimeout(fetch, 1000 * 60 * 30);
    return requestPromise;
}

/**
 * Get the timezone of the logged in user
 *
 * @returns {Promise}
 */
function fetchTimezone() {
    const requestPromise = queueRequest('Get', {
        returnValueList: 'nameValuePairs',
        name: 'timeZone',
    })
        .then((data) => {
            const timezone = data.nameValuePairs.timeZone.selected || 'America/Los_Angeles';
            Ion.merge(IONKEYS.MY_PERSONAL_DETAILS, {timezone});
        });

    // Refresh the timezone every 30 minutes
    setTimeout(fetchTimezone, 1000 * 60 * 30);
    return requestPromise;
}

/**
 * Get personal details for a list of emails.
 *
 * @param {String} emailList
 * @returns {Promise}
 */
function getForEmails(emailList) {
    let detailsFormatted;
    return queueRequest('PersonalDetails_GetForEmails', {
        emailList,
    })
        .then((details) => {
            detailsFormatted = formatPersonalDetails(details);
            return Ion.merge(IONKEYS.PERSONAL_DETAILS, detailsFormatted);
        })
        .then(() => detailsFormatted);
}

// When the app reconnects from being offline, fetch all of the personal details
onReconnect(fetch);

export {
    fetch,
    fetchTimezone,
    getForEmails,
};
