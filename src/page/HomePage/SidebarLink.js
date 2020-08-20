import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Text from '../../components/Text';
import {withRouter} from '../../lib/Router';
import IONKEYS from '../../IONKEYS';
import styles from '../../style/StyleSheet';
import WithIon from '../../components/WithIon';
import PressableLink from '../../components/PressableLink';

const propTypes = {
    // The ID of the report for this link
    reportID: PropTypes.number.isRequired,

    // The name of the report to use as the text for this link
    reportName: PropTypes.string.isRequired,

    // These are from withRouter
    // eslint-disable-next-line react/forbid-prop-types
    match: PropTypes.object.isRequired,

    // Toggles the hamburger menu open and closed
    onLinkClick: PropTypes.func.isRequired,

    /* Ion Props */

    isUnread: PropTypes.bool,
};

const defaultProps = {
    isUnread: false,
};

const SidebarLink = (props) => {
    const paramsReportID = parseInt(props.match.params.reportID, 10);
    const isReportActive = paramsReportID === props.reportID;
    const linkWrapperActiveStyle = isReportActive && styles.sidebarLinkWrapperActive;
    const linkActiveStyle = isReportActive ? styles.sidebarLinkActive : styles.sidebarLink;
    const textActiveStyle = isReportActive ? styles.sidebarLinkActiveText : styles.sidebarLinkText;
    const textActiveUnreadStyle = props.isUnread
        ? [textActiveStyle, styles.sidebarLinkTextUnread] : [textActiveStyle];
    return (
        <View style={[styles.sidebarListItem, linkWrapperActiveStyle]}>
            <PressableLink onClick={props.onLinkClick} to={`/${props.reportID}`} style={linkActiveStyle}>
                <View style={[styles.sidebarLinkInner]}>
                    <Text numberOfLines={1} style={textActiveUnreadStyle}>
                        {props.reportName}
                    </Text>
                </View>
            </PressableLink>
        </View>
    );
};

SidebarLink.displayName = 'SidebarLink';
SidebarLink.propTypes = propTypes;
SidebarLink.defaultProps = defaultProps;

export default withRouter(WithIon({
    isUnread: {
        key: `${IONKEYS.REPORT}_%DATAFROMPROPS%`,
        path: 'hasUnread',
        defaultValue: false,
        pathForProps: 'reportID',
    }
})(SidebarLink));
