import React, { Component } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { withOnyx } from 'react-native-onyx';
import { compose } from 'underscore';
import Button from '../../../../components/Button';
import FixedFooter from '../../../../components/FixedFooter';
import HeaderWithCloseButton from "../../../../components/HeaderWithCloseButton";
import ScreenWrapper from "../../../../components/ScreenWrapper";
import Text from '../../../../components/Text';
import TextInput from '../../../../components/TextInput';
import withLocalize, {withLocalizePropTypes} from "../../../../components/withLocalize";
import Navigation from "../../../../libs/Navigation/Navigation";
import Permissions from '../../../../libs/Permissions';
import ONYXKEYS from '../../../../ONYXKEYS';
import ROUTES from "../../../../ROUTES";
import styles from '../../../../styles/styles';

const propTypes = {
    ...withLocalizePropTypes,
};

class NewContactMethodPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
        };
        this.onLoginChange = this.onLoginChange.bind(this);
    }

    onLoginChange(login) {
        this.setState({login});
    }

    onPasswordChange(password) {
        this.setState({password});
    }

    render() {
        return (
            <ScreenWrapper
            onTransitionEnd={() => {
                if (!this.loginInputRef) {
                    return;
                }
                this.loginInputRef.focus();
            }}
            >
                <HeaderWithCloseButton
                    title={this.props.translate('contacts.newContactMethod')}
                    shouldShowBackButton
                    onBackButtonPress={() => Navigation.navigate(ROUTES.SETTINGS_CONTACT_METHODS)}
                    onCloseButtonPress={() => Navigation.dismissModal(true)}
                />
                <ScrollView>
                    <Text style={[styles.ph5, styles.mb5]}>
                        {this.props.translate('newContactMethodPage.description')}
                    </Text>
                    <View style={[styles.ph5, styles.mb6]}>
                        <TextInput
                            label={this.props.translate('newContactMethodPage.loginPlaceholder')}
                            ref={el => this.loginInputRef = el}
                            value={this.state.login}
                            onChangeText={this.onLoginChange}
                            returnKeyType={Permissions.canUsePasswordlessLogins(this.props.betas) ? 'done' : 'next'}
                        />
                    </View>
                    {!Permissions.canUsePasswordlessLogins(this.props.betas) &&
                        <View style={[styles.ph5, styles.mb6]}>
                            <TextInput
                                label={this.props.translate('common.password')}
                                value={this.state.password}
                                onChangeText={this.onPasswordChange}
                                returnKeyType="done"
                            />
                        </View>
                    }
                </ScrollView>
                <FixedFooter style={[styles.flexGrow0]}>
                    <Button
                        success
                        text={this.props.translate('common.add')}
                        onPress={() => {}}
                        pressOnEnter
                    />
                </FixedFooter>
            </ScreenWrapper>
        );
    }
}

NewContactMethodPage.displayName = 'NewContactMethodPage';
NewContactMethodPage.propTypes = propTypes;

export default compose(
    withLocalize,
    withOnyx({
        betas: {key: ONYXKEYS.BETAS},
    }),
)(NewContactMethodPage);
