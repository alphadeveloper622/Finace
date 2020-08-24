import React from 'react';
import {Image, View} from 'react-native';
import styles from '../../../style/StyleSheet';
import logo from '../../../../assets/images/expensify-logo_reversed.png';
import SafeAreaInsetPropTypes from '../../SafeAreaInsetPropTypes';

const propTypes = {
    // Safe area insets required for mobile devices margins
    insets: SafeAreaInsetPropTypes.isRequired,
};

const SidebarTop = ({insets}) => (
    <View style={[styles.sidebarHeader, {marginTop: insets.top}]}>
        <Image
            resizeMode="contain"
            style={[styles.sidebarHeaderLogo]}
            source={logo}
        />
    </View>
);

SidebarTop.propTypes = propTypes;
SidebarTop.displayName = 'SidebarTop';

export default SidebarTop;
