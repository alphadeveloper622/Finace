import _ from 'underscore';
import Onyx from 'react-native-onyx';
import * as PersistedRequests from '../actions/PersistedRequests';
import * as NetworkStore from './NetworkStore';
import ONYXKEYS from '../../ONYXKEYS';
import * as ActiveClientManager from '../ActiveClientManager';
import * as Request from '../Request';
import * as RequestThrottle from '../RequestThrottle';
import CONST from '../../CONST';

let resolveIsReadyPromise;
let isReadyPromise = new Promise((resolve) => {
    resolveIsReadyPromise = resolve;
});

// Resolve the isReadyPromise immediately so that the queue starts working as soon as the page loads
resolveIsReadyPromise();

let isSequentialQueueRunning = false;
let currentRequest = null;

/**
 * This method will get any persisted requests and fire them off in sequence to retry them.
 *
 * @returns {Promise}
 */
function process() {
    const persistedRequests = [...PersistedRequests.getAll()];

    // If we have no persisted requests or we are offline we don't want to make any requests so we return early
    if (_.isEmpty(persistedRequests) || NetworkStore.isOffline()) {
        isSequentialQueueRunning = false;
        return Promise.resolve();
    }

    isSequentialQueueRunning = true;

    // Get the first request in the queue and process it
    const requestToProcess = persistedRequests.shift();

    // Set the current request to a promise awaiting its processing
    currentRequest = Request.processWithMiddleware(requestToProcess, true).then(() => {
        // If the request is successful we want to:
        // - Remove it from the queue
        // - Clear any wait time we may have added if it failed before
        // - Call process again to process the other requests in the queue
        PersistedRequests.remove(requestToProcess);
        RequestThrottle.clear();
        return process();
    }).catch((error) => {
        // If the request was cancelled we don't want to retry it, so remove it from the queue and move on to the next request
        if (error.name === CONST.ERROR.REQUEST_CANCELLED) {
            PersistedRequests.remove(requestToProcess);
            RequestThrottle.clear();
            return process();
        }

        // If the request failed and we want to retry it:
        // - Sleep for a period of time
        // - Call process again. This will retry the same request since we have not removed it from the queue
        return RequestThrottle.sleep().then(process);
    });
    return currentRequest;
}

function flush() {
    if (isSequentialQueueRunning) {
        return;
    }

    // ONYXKEYS.PERSISTED_REQUESTS is shared across clients, thus every client/tab will have a copy
    // It is very important to only process the queue from leader client otherwise requests will be duplicated.
    if (!ActiveClientManager.isClientTheLeader()) {
        return;
    }

    isSequentialQueueRunning = true;

    // Reset the isReadyPromise so that the queue will be flushed as soon as the request is finished
    isReadyPromise = new Promise((resolve) => {
        resolveIsReadyPromise = resolve;
    });

    // Ensure persistedRequests are read from storage before proceeding with the queue
    const connectionID = Onyx.connect({
        key: ONYXKEYS.PERSISTED_REQUESTS,
        callback: () => {
            Onyx.disconnect(connectionID);
            process()
                .finally(() => {
                    isSequentialQueueRunning = false;
                    resolveIsReadyPromise();
                    currentRequest = null;
                });
        },
    });
}

/**
 * @returns {Boolean}
 */
function isRunning() {
    return isSequentialQueueRunning;
}

// Flush the queue when the connection resumes
NetworkStore.onReconnection(flush);

/**
 * @param {Object} request
 */
function push(request) {
    // Add request to Persisted Requests so that it can be retried if it fails
    PersistedRequests.save([request]);

    // If we are offline we don't need to trigger the queue to empty as it will happen when we come back online
    if (NetworkStore.isOffline()) {
        return;
    }

    // If the queue is running this request will run once it has finished processing the current batch
    if (isSequentialQueueRunning) {
        isReadyPromise.then(flush);
        return;
    }

    flush();
}

/**
 * @returns {Promise}
 */
function getCurrentRequest() {
    if (currentRequest === null) {
        return Promise.resolve();
    }
    return currentRequest;
}

/**
 * Returns a promise that resolves when the sequential queue is done processing all persisted write requests.
 * @returns {Promise}
 */
function waitForIdle() {
    return isReadyPromise;
}

export {
    flush,
    getCurrentRequest,
    isRunning,
    push,
    waitForIdle,
};
