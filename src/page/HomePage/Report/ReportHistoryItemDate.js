import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import DateUtils from '../../../lib/DateUtils';

const propTypes = {
    // UTC timestamp for when the action was created
    timestamp: PropTypes.number.isRequired,
};

class ReportHistoryItemDate extends React.Component {
    render() {
        return (
            <Text className="chat-item__date">
                {DateUtils.timestampToRelative(this.props.timestamp)}
            </Text>
        );
    }
}

ReportHistoryItemDate.propTypes = propTypes;
ReportHistoryItemDate.displayName = 'ReportHistoryItemDate';

export default ReportHistoryItemDate;
