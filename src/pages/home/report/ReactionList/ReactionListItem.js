import React from 'react';
import {View, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../../../styles/styles';
import colors from '../../../../styles/colors';
import Avatar from '../../../../components/Avatar';
import compose from '../../../../libs/compose';
import withLocalize, {withLocalizePropTypes} from '../../../../components/withLocalize';
import {withPersonalDetails} from '../../../../components/OnyxProvider';
import ControlSelection from '../../../../libs/ControlSelection';
import Text from '../../../../components/Text';

const propTypes = {
    /** Styles for the outermost View */
    // eslint-disable-next-line react/forbid-prop-types
    wrapperStyles: PropTypes.arrayOf(PropTypes.object),

    /** Personal details of the user */
    item: PropTypes.shape({
        // Display Name of participant
        displayName: PropTypes.string,

        // Avatar url of participant
        avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /** First Name of the participant */
        firstName: PropTypes.string,
    }).isRequired,

    ...withLocalizePropTypes,
};

const defaultProps = {
    wrapperStyles: [styles.reactionListItem],
};

const ReactionListItem = props => (
    <View style={props.wrapperStyles}>
        <Pressable
            style={[styles.alignSelfStart, styles.mr3]}
            onPressIn={ControlSelection.block}
            onPressOut={ControlSelection.unblock}
        >
            <Avatar
                containerStyles={[styles.actionAvatar]}
                source={props.item.avatar}
            />
        </Pressable>
        <View style={[styles.chatItemRight]}>
            <Text style={styles.h3}>{props.item.displayName}</Text>
            <Text style={{color: colors.greenSupportingText}}>{props.item.login}</Text>
        </View>
    </View>
);

ReactionListItem.propTypes = propTypes;
ReactionListItem.defaultProps = defaultProps;
ReactionListItem.displayName = 'ReactionListItem';

export default compose(
    withLocalize,
    withPersonalDetails(),
)(ReactionListItem);
