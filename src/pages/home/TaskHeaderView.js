import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {withOnyx} from 'react-native-onyx';
import lodashGet from 'lodash/get';
import PropTypes from 'prop-types';
import compose from '../../libs/compose';
import styles from '../../styles/styles';
import reportPropTypes from '../reportPropTypes';
import MenuItemWithTopDescription from '../../components/MenuItemWithTopDescription';
import TaskSelectorLink from '../../components/TaskSelectorLink';
import Navigation from '../../libs/Navigation/Navigation';
import ROUTES from '../../ROUTES';
import * as TaskUtils from '../../libs/actions/Task';
import ONYXKEYS from '../../ONYXKEYS';
import withLocalize from '../../components/withLocalize';

const propTypes = {
    /** The report currently being looked at */
    report: reportPropTypes.isRequired,

    /** All of the personal details for everyone */
    personalDetails: PropTypes.objectOf(
        PropTypes.shape({
            /** Display name of the person */
            displayName: PropTypes.string,

            /** Avatar URL of the person */
            avatar: PropTypes.string,

            /** Login of the person */
            login: PropTypes.string,
        }),
    ),
};

const defaultProps = {
    personalDetails: {},
};

function TaskHeaderView(props) {
    const [assignee, setAssignee] = useState('');

    useEffect(() => {
        TaskUtils.setTaskReport(props.report);
        if (!props.report.assignee) {
            return;
        }
        if (props.report.assignee) {
            const assigneeDetails = lodashGet(props.personalDetails, props.report.assignee);
            const displayDetails = TaskUtils.constructAssignee(assigneeDetails);
            setAssignee(displayDetails);
        }
    }, [props]);
    // eslint-disable-next-line no-console
    console.log('TaskHeaderView.js props', props);
    return (
        <>
            <View style={[styles.sidebarLinkActive, styles.ph3]}>
                {props.report.assignee && (
                    <TaskSelectorLink
                        icons={assignee.icons}
                        text={assignee.displayName}
                        alternateText={assignee.subtitle}
                        onPress={() => Navigation.navigate(ROUTES.getTaskReportAssigneeRoute(props.report.reportID))}
                        label="taskReport.to"
                        isNewTask={false}
                    />
                )}
                {/* TO-DO: Add functionality to mark task as done. Will be in: https://github.com/Expensify/App/issues/16858 */}
            </View>
            <MenuItemWithTopDescription
                shouldShowHeaderTitle
                title={props.report.reportName}
                description="Task"
                onPress={() => Navigation.navigate(ROUTES.getTaskReportTitleRoute(props.report.reportID))}
            />
            <MenuItemWithTopDescription
                title={lodashGet(props.report, 'description', '')}
                description="Description"
                onPress={() => Navigation.navigate(ROUTES.getTaskReportDescriptionRoute(props.report.reportID))}
            />
        </>
    );
}

TaskHeaderView.defaultProps = defaultProps;
TaskHeaderView.propTypes = propTypes;
TaskHeaderView.displayName = 'TaskHeaderView';

export default compose(
    withLocalize,
    withOnyx({
        personalDetails: {
            key: ONYXKEYS.PERSONAL_DETAILS,
        },
    }),
)(TaskHeaderView);
