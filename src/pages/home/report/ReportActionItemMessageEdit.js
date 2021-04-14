import React from 'react';
import {View, Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'underscore';
import ReportActionPropTypes from './ReportActionPropTypes';
import styles from '../../../styles/styles';
import TextInputFocusable from '../../../components/TextInputFocusable';
import {editReportComment, saveReportActionDraft} from '../../../libs/actions/Report';
import {TouchableOpacity} from 'react-native-web';

const propTypes = {
    // All the data of the action
    action: PropTypes.shape(ReportActionPropTypes).isRequired,

    // Draft message
    draftMessage: PropTypes.string.isRequired,

    reportID: PropTypes.number.isRequired,
};

class ReportActionItemMessageEdit extends React.Component {
    constructor(props) {
        super(props);
        this.updateDraft = this.updateDraft.bind(this);
        this.deleteDraft = this.deleteDraft.bind(this);
        this.debouncedSaveDraft = _.debounce(this.debouncedSaveDraft.bind(this), 1000, false);
        this.publishDraft = this.publishDraft.bind(this);

        this.state = {
            draft: this.props.draftMessage,
        };
    }

    /**
     * Update the value of the draft in Onyx
     *
     * @param {String} newDraft
     */
    updateDraft(newDraft) {
        this.setState({draft: newDraft});
        this.debouncedSaveDraft(newDraft);
    }

    deleteDraft() {
        saveReportActionDraft(this.props.reportID, this.props.action.reportActionID, '');
    }

    debouncedSaveDraft() {
        saveReportActionDraft(this.props.reportID, this.props.action.reportActionID, this.state.draft);
    }

    publishDraft() {
        editReportComment(this.props.reportID, this.props.action, this.state.draft);
        this.deleteDraft();
    }

    render() {
        return (
            <View style={[styles.chatItemMessage]}>
                <TextInputFocusable
                    multiline
                    ref={el => this.textInput = el}
                    onChangeText={this.updateDraft} // Debounced saveDraftComment
                    defaultValue={this.props.draftMessage}
                    maxLines={16} // This is the same that slack has
                    style={[styles.textInput, styles.flex0]}
                />
                <View style={[styles.flexRow, styles.mt1]}>
                    <TouchableOpacity style={[styles.button, styles.mr2]}>
                        <Text style={[styles.buttonText]} onPress={this.deleteDraft}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSuccess]}>
                        <Text style={[styles.buttonText, styles.buttonSuccessText]} onPress={this.publishDraft}>
                            Save Changes
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

ReportActionItemMessageEdit.propTypes = propTypes;
export default ReportActionItemMessageEdit;
