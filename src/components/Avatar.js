import React, {Component} from 'react';
import {Image, View} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'underscore';
import lodashGet from 'lodash/get';
import stylePropTypes from '../styles/stylePropTypes';
import Icon from './Icon';
import themeColors from '../styles/themes/default';
import CONST from '../CONST';
import * as StyleUtils from '../styles/StyleUtils';
import * as Expensicons from './Icon/Expensicons';
import getAvatarDefaultSource from '../libs/getAvatarDefaultSource';
import {withNetwork} from './OnyxProvider';
import networkPropTypes from './networkPropTypes';

const propTypes = {
    /** Source for the avatar. Can be a URL or an icon. */
    source: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    /** Extra styles to pass to Image */
    // eslint-disable-next-line react/forbid-prop-types
    imageStyles: PropTypes.arrayOf(PropTypes.object),

    /** Extra styles to pass to View wrapper */
    containerStyles: stylePropTypes,

    /** Set the size of Avatar */
    size: PropTypes.oneOf(_.values(CONST.AVATAR_SIZE)),

    /** The fill color for the icon. Can be hex, rgb, rgba, or valid react-native named color such as 'red' or 'blue' */
    fill: PropTypes.string,

    /** A fallback avatar icon to display when there is an error on loading avatar from remote URL. */
    fallbackIcon: PropTypes.func,

    /** Props to detect online status */
    network: networkPropTypes.isRequired,
};

const defaultProps = {
    source: null,
    imageStyles: [],
    containerStyles: [],
    size: CONST.AVATAR_SIZE.DEFAULT,
    fill: themeColors.icon,
    fallbackIcon: Expensicons.FallbackAvatar,
};

class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageError: false,
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (
            lodashGet(this.props.network, 'isOffline')
                  && !lodashGet(nextProps.network, 'isOffline')
        ) {
            return true;
        }
        if (this.props.source !== nextProps.source) {
            return true;
        }
        if (this.state.imageError !== nextState.imageError) {
            return true;
        }

        if (this.props.fill !== nextProps.fill) {
            return true;
        }
        if (this.props.size !== nextProps.size) {
            return true;
        }

        return false;
    }

    componentDidUpdate(prevProps) {
        if (!this.state.imageError) {
            return;
        }
        if (
            lodashGet(prevProps.network, 'isOffline')
            && !lodashGet(this.props.network, 'isOffline')
        ) {
            this.setState({imageError: false});
        }
    }

    render() {
        if (!this.props.source) {
            return null;
        }

        const imageStyle = [
            StyleUtils.getAvatarStyle(this.props.size),
            ...this.props.imageStyles,
        ];

        const iconSize = StyleUtils.getAvatarSize(this.props.size);

        return (
            <View pointerEvents="none" style={this.props.containerStyles}>
                {_.isFunction(this.props.source) || this.state.imageError
                    ? (
                        <Icon
                            src={this.state.imageError ? this.props.fallbackIcon : this.props.source}
                            height={iconSize}
                            width={iconSize}
                            fill={this.state.imageError ? themeColors.offline : this.props.fill}
                        />
                    )
                    : (
                        <Image
                            source={{uri: this.props.source}}
                            defaultSource={getAvatarDefaultSource(this.props.source)}
                            style={imageStyle}
                            onError={() => this.setState({imageError: true})}
                        />
                    )}
            </View>
        );
    }
}

Avatar.defaultProps = defaultProps;
Avatar.propTypes = propTypes;
export default withNetwork()(Avatar);
