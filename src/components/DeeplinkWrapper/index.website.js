import _ from 'underscore';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {withOnyx} from 'react-native-onyx';
import deeplinkRoutes from './deeplinkRoutes';
import FullScreenLoadingIndicator from '../FullscreenLoadingIndicator';
import TextLink from '../TextLink';
import * as Illustrations from '../Icon/Illustrations';
import withLocalize, {withLocalizePropTypes} from '../withLocalize';
import Text from '../Text';
import styles from '../../styles/styles';
import compose from '../../libs/compose';
import CONST from '../../CONST';
import CONFIG from '../../CONFIG';
import Icon from '../Icon';
import * as Expensicons from '../Icon/Expensicons';
import colors from '../../styles/colors';
import * as Browser from '../../libs/Browser';
import ONYXKEYS from '../../ONYXKEYS';
import * as Authentication from '../../libs/Authentication';

const propTypes = {
    /** Children to render. */
    children: PropTypes.node.isRequired,

    ...withLocalizePropTypes,

    /** Session info for the currently logged-in user. */
    session: PropTypes.shape({

        /** Currently logged-in user authToken */
        email: PropTypes.string,

        /** Currently logged-in user authToken */
        authToken: PropTypes.string,
    }),
};

const defaultProps = {
    session: {
        email: '',
        authToken: '',
    },
};

class DeeplinkWrapper extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            appInstallationCheckStatus: (this.isMacOSWeb() && CONFIG.ENVIRONMENT !== CONST.ENVIRONMENT.DEV)
                ? CONST.DESKTOP_DEEPLINK_APP_STATE.CHECKING : CONST.DESKTOP_DEEPLINK_APP_STATE.NOT_INSTALLED,
        };
        this.focused = true;
    }

    componentDidMount() {
        if (!this.isMacOSWeb() || CONFIG.ENVIRONMENT === CONST.ENVIRONMENT.DEV) {
            return;
        }

        window.addEventListener('blur', () => {
            this.focused = false;
        });

        // check if pathname matches with deeplink routes
        const matchedRoute = _.find(deeplinkRoutes, (route) => {
            if (route.isDisabled && route.isDisabled(this.props.betas)) {
                return false;
            }
            const routeRegex = new RegExp(route.pattern);
            return routeRegex.test(window.location.pathname);
        });

        if (!matchedRoute) {
            this.setState({deeplinkMatch: false});
            this.updateAppInstallationCheckStatus();
            return;
        }
        this.setState({deeplinkMatch: true});
        const expensifyUrl = new URL(CONFIG.EXPENSIFY.NEW_EXPENSIFY_URL);
        const params = new URLSearchParams();
        params.set('exitTo', `${window.location.pathname}${window.location.search}${window.location.hash}`);
        if (!this.props.session.authToken) {
            const expensifyDeeplinkUrl = `${CONST.DEEPLINK_BASE_URL}${expensifyUrl.host}/transition?${params.toString()}`;
            this.openRouteInDesktopApp(expensifyDeeplinkUrl);
            return;
        }
        Authentication.getShortLivedAuthToken().then((shortLivedAuthToken) => {
            params.set('email', this.props.session.email);
            params.set('shortLivedAuthToken', `${shortLivedAuthToken}`);
            const expensifyDeeplinkUrl = `${CONST.DEEPLINK_BASE_URL}${expensifyUrl.host}/transition?${params.toString()}`;
            this.openRouteInDesktopApp(expensifyDeeplinkUrl);
        }).catch(() => {
            this.updateAppInstallationCheckStatus();
        });
    }

    updateAppInstallationCheckStatus() {
        setTimeout(() => {
            if (!this.focused) {
                this.setState({appInstallationCheckStatus: CONST.DESKTOP_DEEPLINK_APP_STATE.INSTALLED});
            } else {
                this.setState({appInstallationCheckStatus: CONST.DESKTOP_DEEPLINK_APP_STATE.NOT_INSTALLED});
            }
        }, 500);
    }

    openRouteInDesktopApp(expensifyDeeplinkUrl) {
        this.updateAppInstallationCheckStatus();

        // This check is necessary for Safari, otherwise, if the user
        // does NOT have the Expensify desktop app installed, it's gonna
        // show an error in the page saying that the address is invalid
        if (CONST.BROWSER.SAFARI === Browser.getBrowser()) {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            iframe.contentWindow.location.href = expensifyDeeplinkUrl;

            // Since we're creating an iframe for Safari to handle
            // deeplink we need to give this iframe some time for
            // it to do what it needs to do. After that we can just
            // remove the iframe.
            setTimeout(() => {
                if (!iframe.parentNode) {
                    return;
                }

                iframe.parentNode.removeChild(iframe);
            }, 100);
        } else {
            window.location.href = expensifyDeeplinkUrl;
        }
    }

    isMacOSWeb() {
        return !Browser.isMobile() && (
            typeof navigator === 'object'
            && typeof navigator.userAgent === 'string'
            && /Mac/i.test(navigator.userAgent)
            && !/Electron/i.test(navigator.userAgent)
        );
    }

    render() {
        if (this.state.appInstallationCheckStatus === CONST.DESKTOP_DEEPLINK_APP_STATE.CHECKING) {
            return <FullScreenLoadingIndicator style={styles.flex1} />;
        }

        if (
            this.state.deeplinkMatch
            && this.state.appInstallationCheckStatus === CONST.DESKTOP_DEEPLINK_APP_STATE.INSTALLED
        ) {
            return (
                <View style={styles.deeplinkWrapperContainer}>
                    <View style={styles.deeplinkWrapperMessage}>
                        <View style={styles.mb2}>
                            <Icon
                                width={200}
                                height={164}
                                src={Illustrations.RocketBlue}
                            />
                        </View>
                        <Text style={[styles.textHeadline, styles.textXXLarge]}>
                            {this.props.translate('deeplinkWrapper.launching')}
                        </Text>
                        <View style={styles.mt2}>
                            <Text style={[styles.fontSizeNormal, styles.textAlignCenter]}>
                                {this.props.translate('deeplinkWrapper.redirectedToDesktopApp')}
                                {'\n'}
                                {this.props.translate('deeplinkWrapper.youCanAlso')}
                                {' '}
                                <TextLink onPress={() => this.setState({deeplinkMatch: false})}>
                                    {this.props.translate('deeplinkWrapper.openLinkInBrowser')}
                                </TextLink>
                                .
                            </Text>
                        </View>
                    </View>
                    <View style={styles.deeplinkWrapperFooter}>
                        <Icon
                            width={154}
                            height={34}
                            fill={colors.green}
                            src={Expensicons.ExpensifyWordmark}
                        />
                    </View>
                </View>
            );
        }

        return this.props.children;
    }
}

DeeplinkWrapper.propTypes = propTypes;
DeeplinkWrapper.defaultProps = defaultProps;
export default compose(
    withLocalize,
    withOnyx({
        betas: {key: ONYXKEYS.BETAS},
        session: {key: ONYXKEYS.SESSION},
    }),
)(DeeplinkWrapper);
