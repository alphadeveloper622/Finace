import CONST from '../CONST';
import DateUtils from './DateUtils';
import * as NumberUtils from './NumberUtils';

/**
 * Optimistically generate a transaction.
 *
 * @param {Number} amount – in cents
 * @param {String} currency
 * @param {String} reportID
 * @param {String} comment
 * @returns {Object}
 */
function buildOptimisticTransaction(amount, currency, reportID, comment = '') {
    // transactionIDs are random, positive, 64-bit numbers.
    // Because JS can only handle 53-bit numbers, transactionIDs are strings in the front-end (just like reportActionID)
    const transactionID = NumberUtils.rand64();
    return {
        transactionID,
        amount,
        comment,
        reportID,
        created: DateUtils.getDBTime(),
        pendingAction: CONST.RED_BRICK_ROAD_PENDING_ACTION.ADD,
    };
}

export default {
    buildOptimisticTransaction,
};
