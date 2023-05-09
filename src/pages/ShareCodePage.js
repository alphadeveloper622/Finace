import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {withOnyx} from 'react-native-onyx';
import ScreenWrapper from '../components/ScreenWrapper';
import HeaderWithCloseButton from '../components/HeaderWithCloseButton';
import Navigation from '../libs/Navigation/Navigation';
import withLocalize, {withLocalizePropTypes} from '../components/withLocalize';
import QRShare from '../components/QRShare';
import compose from '../libs/compose';
import reportPropTypes from './reportPropTypes';
import withCurrentUserPersonalDetails, {withCurrentUserPersonalDetailsDefaultProps, withCurrentUserPersonalDetailsPropTypes} from '../components/withCurrentUserPersonalDetails';
import styles from '../styles/styles';
import roomAvatar from '../../assets/images/avatars/room.svg';
import ONYXKEYS from '../ONYXKEYS';

const propTypes = {
    /** Navigation route context info provided by react navigation */
    route: PropTypes.shape({
        /** Route specific parameters used on this screen */
        params: PropTypes.shape({
            reportID: PropTypes.string,
        }).isRequired,
    }).isRequired,

    /** The report currently being looked at */
    report: reportPropTypes,

    ...withLocalizePropTypes,
    ...withCurrentUserPersonalDetailsPropTypes,
};

const defaultProps = {
    report: undefined,
    ...withCurrentUserPersonalDetailsDefaultProps,
};

// eslint-disable-next-line react/prefer-stateless-function
class ShareCodePage extends React.Component {
    render() {
        // eslint-disable-next-line es/no-optional-chaining
        const reportId = this.props.route?.params?.reportID;
        const isReport = this.props.report != null && this.props.report.reportID != null;

        return (
            <ScreenWrapper>
                <HeaderWithCloseButton
                    title={this.props.translate('common.shareCode')}
                    shouldShowBackButton
                    onBackButtonPress={() => Navigation.goBack()}
                    onCloseButtonPress={() => Navigation.dismissModal(true)}
                />

                <View style={styles.shareCodePage}>
                    <QRShare
                        type={isReport ? 'report' : 'profile'}
                        value={isReport ? reportId : this.props.session.email}
                        title={isReport ? this.props.report.reportName : this.props.currentUserPersonalDetails.displayName}
                        subtitle={isReport ? undefined : this.props.session.email}
                        logo={isReport ? roomAvatar : this.props.currentUserPersonalDetails.avatar}
                        download={() => null}
                    />
                </View>
            </ScreenWrapper>
        );
    }
}

ShareCodePage.propTypes = propTypes;
ShareCodePage.defaultProps = defaultProps;

export default compose(
    withLocalize,
    withOnyx({
        report: {
            // eslint-disable-next-line es/no-optional-chaining
            key: ({route}) => (route.params?.reportId != null ? `${ONYXKEYS.COLLECTION.REPORT}${route.params.reportID}` : undefined),
        },
    }),
    withCurrentUserPersonalDetails,
)(ShareCodePage);
