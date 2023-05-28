import React from 'react';
import {View} from 'react-native';
import {withOnyx} from 'react-native-onyx';
import _ from 'underscore';
import PropTypes from 'prop-types';
import Text from '../../components/Text';
import styles from '../../styles/styles';
import ONYXKEYS from '../../ONYXKEYS';
import withLocalize, {withLocalizePropTypes} from '../../components/withLocalize';
import compose from '../../libs/compose';
import PressableWithFeedback from '../../components/Pressable/PressableWithFeedback';

const propTypes = {
    /** The credentials of the logged in person */
    credentials: PropTypes.shape({
        /** The email the user logged in with */
        login: PropTypes.string,
    }),

    /** Callback to navigate back to email form */
    onPress: PropTypes.func.isRequired,

    ...withLocalizePropTypes,
};

const defaultProps = {
    credentials: {
        login: '',
    },
};

const ChangeExpensifyLoginLink = (props) => (
    <View style={[styles.changeExpensifyLoginLinkContainer, styles.mt3]}>
        {!_.isEmpty(props.credentials.login) && <Text style={styles.mr1}>{props.translate('loginForm.notYou', {user: props.formatPhoneNumber(props.credentials.login)})}</Text>}
        <PressableWithFeedback
            style={[styles.link]}
            onPress={props.onPress}
            accesibiltyRole='link'
            accessibilityLabel={props.translate('common.goBack')}
        >
            <Text style={[styles.link]}>
                {props.translate('common.goBack')}
                {'.'}
            </Text>
        </PressableWithFeedback>
    </View>
);

ChangeExpensifyLoginLink.propTypes = propTypes;
ChangeExpensifyLoginLink.defaultProps = defaultProps;
ChangeExpensifyLoginLink.displayName = 'ChangeExpensifyLoginLink';

export default compose(
    withLocalize,
    withOnyx({
        credentials: {key: ONYXKEYS.CREDENTIALS},
    }),
)(ChangeExpensifyLoginLink);
