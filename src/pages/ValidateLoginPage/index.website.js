import React, {Component} from 'react';
import {withOnyx} from 'react-native-onyx';
import lodashGet from 'lodash/get';
import {
    propTypes as validateLinkPropTypes,
    defaultProps as validateLinkDefaultProps,
} from './validateLinkPropTypes';
import * as User from '../../libs/actions/User';
import FullScreenLoadingIndicator from '../../components/FullscreenLoadingIndicator';
import MagicCodeModal from '../../components/MagicCodeModal';
import ONYXKEYS from '../../ONYXKEYS';
import * as Session from '../../libs/actions/Session';
import Permissions from '../../libs/Permissions';

const propTypes = {
    /** The accountID and validateCode are passed via the URL */
    route: validateLinkPropTypes,

    /** List of betas available to current user */
    betas: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
    route: validateLinkDefaultProps,
    betas: [],
};

class ValidateLoginPage extends Component {
    componentDidMount() {
        if (Permissions.canUsePasswordlessLogins(this.props.betas)) {
            if (!this.isAuthenticated()) {
                Session.signInFromMagicLink(this.accountID(), this.validateCode());
            }
        } else {
            User.validateLogin(this.accountID(), this.validateCode());
        }
    }

    accountID = () => lodashGet(this.props.route.params, 'accountID', '');

    validateCode = () => lodashGet(this.props.route.params, 'validateCode', '');

    isAuthenticated = () => Boolean(lodashGet(this.props, 'session.authToken', null));

    render() {
        return (Permissions.canUsePasswordlessLogins(this.props.betas) ? <MagicCodeModal code={this.validateCode()} /> : <FullScreenLoadingIndicator />);
    }
}

ValidateLoginPage.propTypes = propTypes;
ValidateLoginPage.defaultProps = defaultProps;

export default withOnyx({
    betas: {key: ONYXKEYS.BETAS},
    session: {key: ONYXKEYS.SESSION},
})(ValidateLoginPage);
