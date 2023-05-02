import _ from 'underscore';
import React from 'react';
import {View, ScrollView} from 'react-native';
import HeaderWithBackButton from '../../../components/HeaderWithBackButton';
import Navigation from '../../../libs/Navigation/Navigation';
import ROUTES from '../../../ROUTES';
import styles from '../../../styles/styles';
import * as Expensicons from '../../../components/Icon/Expensicons';
import ScreenWrapper from '../../../components/ScreenWrapper';
import withLocalize, {withLocalizePropTypes} from '../../../components/withLocalize';
import MenuItem from '../../../components/MenuItem';

const propTypes = {
    ...withLocalizePropTypes,
};

const SecuritySettingsPage = (props) => {
    const menuItems = [
        {
            translationKey: 'passwordPage.changePassword',
            icon: Expensicons.Key,
            action: () => {
                Navigation.navigate(ROUTES.SETTINGS_PASSWORD);
            },
        },
        {
            translationKey: 'closeAccountPage.closeAccount',
            icon: Expensicons.ClosedSign,
            action: () => {
                Navigation.navigate(ROUTES.SETTINGS_CLOSE);
            },
        },
    ];

    return (
        <ScreenWrapper>
            <HeaderWithBackButton
                title={props.translate('initialSettingsPage.security')}
                onBackButtonPress={() => Navigation.goBack(ROUTES.SETTINGS)}
            />
            <ScrollView
                contentContainerStyle={[
                    styles.flexGrow1,
                    styles.flexColumn,
                    styles.justifyContentBetween,
                ]}
            >
                <View style={[styles.flex1]}>
                    {_.map(menuItems, item => (
                        <MenuItem
                            key={item.translationKey}
                            title={props.translate(item.translationKey)}
                            icon={item.icon}
                            iconRight={item.iconRight}
                            onPress={() => item.action()}
                            shouldShowRightIcon
                        />
                    ))}
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
};

SecuritySettingsPage.propTypes = propTypes;
SecuritySettingsPage.displayName = 'SettingSecurityPage';

export default withLocalize(SecuritySettingsPage);
