import React from 'react';
import {
    Image, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../../styles/styles';
import ExpensifyCashLogo from '../../../../assets/images/expensify-cash.svg';
import welcomeScreenshot from '../../../../assets/images/welcome-screenshot-wide.png';
import variables from '../../../styles/variables';
import TermsAndLicenses from '../TermsAndLicenses';
import WelcomeText from '../../../components/WelcomeText';
import openURLInNewTab from '../../../libs/openURLInNewTab';
import CONST from '../../../CONST';

const propTypes = {
    // The children to show inside the layout
    children: PropTypes.node.isRequired,

    // Whether we should show the welcome text
    // (the welcome screenshot always displays on wide views)
    shouldShowWelcomeText: PropTypes.bool,
};

const defaultProps = {
    shouldShowWelcomeText: true,
};

const SignInPageLayoutWide = props => (
    <View style={[styles.signInPageInner]}>
        <View style={[styles.flex1, styles.flexRow]}>
            <View style={[styles.flex1, styles.w50, styles.alignItemsCenter]}>
                <View>
                    <Image
                        resizeMode="contain"
                        style={[styles.signinWelcomeScreenshotWide]}
                        source={welcomeScreenshot}
                    />
                </View>
            </View>
            <View style={[styles.flex1, styles.w50]}>
                <View style={[styles.signInPageLogo, styles.mt6, styles.mb5]}>
                    <ExpensifyCashLogo width={variables.componentSizeLarge} height={variables.componentSizeLarge} />
                </View>

                <View style={[styles.mb5]}>
                    <Text style={[styles.h1]}>
                        Expensify.cash
                    </Text>
                </View>
                <View style={[styles.signInPageFormContainer]}>
                    {props.children}
                </View>
                {props.shouldShowWelcomeText
                    && (
                    <View style={[styles.mt6, styles.mb6]}>
                        <WelcomeText textSize="large" />
                    </View>
                    )}
                <View>
                    <Text style={[styles.textLabel]}>
                        Enter your GitHub handle on the next page to skip the wait and join our dev-only beta;
                        {' '}
                        help build tomorrow and
                        {' '}
                        <Text
                            style={[styles.link]}
                            onPress={() => openURLInNewTab(CONST.UPWORK_URL)}
                        >
                            earn cash
                        </Text>
                        {' '}
                        today!
                    </Text>
                </View>
                <TermsAndLicenses />
            </View>
        </View>
    </View>
);

SignInPageLayoutWide.propTypes = propTypes;
SignInPageLayoutWide.defaultProps = defaultProps;
SignInPageLayoutWide.displayName = 'SignInPageLayoutWide';


export default SignInPageLayoutWide;
