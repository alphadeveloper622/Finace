import React from 'react';
import {View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import SignInPageContent from './SignInPageContent';
import Footer from './Footer';
import withWindowDimensions, {windowDimensionsPropTypes} from '../../../components/withWindowDimensions';
import styles from '../../../styles/styles';
import SignInPageGraphics from './SignInPageGraphics';

const propTypes = {
    /** The children to show inside the layout */
    children: PropTypes.node.isRequired,

    /** Welcome text to show in the header of the form, changes depending
     * on form type (set password, sign in, etc.) */
    welcomeText: PropTypes.string.isRequired,

    /** Whether to show welcome text on a particular page */
    shouldShowWelcomeText: PropTypes.bool.isRequired,

    ...windowDimensionsPropTypes,
};

const SignInPageLayout = (props) => {
    let containerStyles = [styles.flex1, styles.signInPageInner];
    let contentContainerStyles = [styles.flex1, styles.flexRow];

    if (props.isSmallScreenWidth) {
        containerStyles = [styles.flex1];
        contentContainerStyles = [styles.flex1, styles.flexColumn];
    }

    return (
        <ScrollView
            style={containerStyles}
            contentHeight="100%"
        >
            <View style={contentContainerStyles}>
                <SignInPageContent
                    welcomeText={props.welcomeText}
                    shouldShowWelcomeText={props.shouldShowWelcomeText}
                >
                    {props.children}
                </SignInPageContent>
                {!props.isSmallScreenWidth ? (
                    <>
                        <ScrollView
                            contentHeight="100%"
                        >
                            <SignInPageGraphics />
                        </ScrollView>
                    </>
                )
                    : (
                        <Footer />
                    )}
            </View>
        </ScrollView>
    );
};

SignInPageLayout.propTypes = propTypes;
SignInPageLayout.displayName = 'SignInPageLayout';

export default withWindowDimensions(SignInPageLayout);
