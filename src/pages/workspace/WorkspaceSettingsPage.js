import React from 'react';
import {Keyboard, View} from 'react-native';
import {withOnyx} from 'react-native-onyx';
import _ from 'underscore';
import lodashGet from 'lodash/get';
import ONYXKEYS from '../../ONYXKEYS';
import withLocalize, {withLocalizePropTypes} from '../../components/withLocalize';
import styles from '../../styles/styles';
import Text from '../../components/Text';
import compose from '../../libs/compose';
import * as Policy from '../../libs/actions/Policy';
import Icon from '../../components/Icon';
import * as Expensicons from '../../components/Icon/Expensicons';
import AvatarWithImagePicker from '../../components/AvatarWithImagePicker';
import defaultTheme from '../../styles/themes/default';
import CONST from '../../CONST';
import Picker from '../../components/Picker';
import TextInput from '../../components/TextInput';
import WorkspacePageWithSections from './WorkspacePageWithSections';
import withPolicy, {policyPropTypes, policyDefaultProps} from './withPolicy';
import {withNetwork} from '../../components/OnyxProvider';
import OfflineWithFeedback from '../../components/OfflineWithFeedback';
import Form from '../../components/Form';
import * as StyleUtils from '../../styles/StyleUtils';
import * as ReportUtils from '../../libs/ReportUtils';

const propTypes = {
    ...policyPropTypes,
    ...withLocalizePropTypes,
};

const defaultProps = {
    ...policyDefaultProps,
};

class WorkspaceSettingsPage extends React.Component {
    constructor(props) {
        super(props);

        this.getCurrencyItems = this.getCurrencyItems.bind(this);
        this.submit = this.submit.bind(this);
        this.validate = this.validate.bind(this);
    }

    /**
     * @returns {Object[]}
     */
    getCurrencyItems() {
        const currencyListKeys = _.keys(this.props.currencyList);
        return _.map(currencyListKeys, currencyCode => ({
            value: currencyCode,
            label: `${currencyCode} - ${this.props.currencyList[currencyCode].symbol}`,
        }));
    }

    submit(values) {
        if (this.props.policy.isPolicyUpdating) {
            return;
        }
        const outputCurrency = values.currency;
        Policy.updateGeneralSettings(this.props.policy.id, values.name, outputCurrency);
        Keyboard.dismiss();
    }

    validate(values) {
        const errors = {};
        const name = values.name.trim();

        // Searches for anything that looks like an html tag "< >""
        if (name.search(/<(.|\n)*?>/g) !== -1) {
            errors.name = this.props.translate('workspace.editor.nameHasHtml');
        }

        if (!name || !name.length) {
            errors.name = this.props.translate('workspace.editor.nameIsRequiredError');
        }

        return errors;
    }

    render() {
        // eslint-disable-next-line no-console
        console.log('POLICY: ', this.props.policy, lodashGet(this.props.policy, 'name', ''));
        const policyName = lodashGet(this.props.policy, 'name', '');
        return (
            <WorkspacePageWithSections
                headerText={this.props.translate('workspace.common.settings')}
                route={this.props.route}
                guidesCallTaskID={CONST.GUIDES_CALL_TASK_IDS.WORKSPACE_SETTINGS}
            >
                {hasVBA => (
                    <Form
                        formID={ONYXKEYS.FORMS.WORKSPACE_SETTINGS_FORM}
                        submitButtonText={this.props.translate('workspace.editor.save')}
                        style={[styles.mh5, styles.flexGrow1]}
                        scrollContextEnabled
                        validate={this.validate}
                        onSubmit={this.submit}
                        enabledWhenOffline
                    >
                        <OfflineWithFeedback
                            pendingAction={lodashGet(this.props.policy, 'pendingFields.avatar', null)}
                            errors={lodashGet(this.props.policy, 'errorFields.avatar', null)}
                            onClose={() => Policy.clearAvatarErrors(this.props.policy.id)}
                        >
                            <AvatarWithImagePicker
                                isUploading={this.props.policy.isAvatarUploading}
                                source={lodashGet(this.props.policy, 'avatar')}
                                size={CONST.AVATAR_SIZE.LARGE}
                                DefaultAvatar={() => (
                                    <Icon
                                        src={ReportUtils.getDefaultWorkspaceAvatar(policyName)}
                                        height={80}
                                        width={80}
                                        fill={defaultTheme.iconSuccessFill}
                                        isWorkspaceAvatar
                                        workspaceColorStyle={StyleUtils.getDefaultWorspaceAvatarColor(policyName)}
                                    />
                                )}
                                fallbackIcon={Expensicons.FallbackWorkspaceAvatar}
                                style={[styles.mb3]}
                                anchorPosition={{top: 172, right: 18}}
                                isUsingDefaultAvatar={!lodashGet(this.props.policy, 'avatar', null)}
                                onImageSelected={file => Policy.updateWorkspaceAvatar(lodashGet(this.props.policy, 'id', ''), file)}
                                onImageRemoved={() => Policy.deleteWorkspaceAvatar(lodashGet(this.props.policy, 'id', ''))}
                            />
                        </OfflineWithFeedback>
                        <OfflineWithFeedback
                            pendingAction={lodashGet(this.props.policy, 'pendingFields.generalSettings')}
                        >
                            <TextInput
                                inputID="name"
                                label={this.props.translate('workspace.editor.nameInputLabel')}
                                containerStyles={[styles.mt4]}
                                defaultValue={this.props.policy.name}
                                maxLength={CONST.WORKSPACE_NAME_CHARACTER_LIMIT}
                            />
                            <View style={[styles.mt4]}>
                                <Picker
                                    inputID="currency"
                                    label={this.props.translate('workspace.editor.currencyInputLabel')}
                                    items={this.getCurrencyItems()}
                                    isDisabled={hasVBA}
                                    defaultValue={this.props.policy.outputCurrency}
                                />
                            </View>
                            <Text style={[styles.textLabel, styles.colorMuted, styles.mt2]}>
                                {this.props.translate('workspace.editor.currencyInputHelpText')}
                            </Text>
                        </OfflineWithFeedback>
                    </Form>
                )}
            </WorkspacePageWithSections>
        );
    }
}

WorkspaceSettingsPage.propTypes = propTypes;
WorkspaceSettingsPage.defaultProps = defaultProps;

export default compose(
    withPolicy,
    withOnyx({
        currencyList: {key: ONYXKEYS.CURRENCY_LIST},
    }),
    withLocalize,
    withNetwork(),
)(WorkspaceSettingsPage);
