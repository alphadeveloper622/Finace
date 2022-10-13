import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import _ from 'underscore';
import styles from '../styles/styles';
import Avatar from './Avatar';
import Tooltip from './Tooltip';
import Text from './Text';
import themeColors from '../styles/themes/default';
import * as StyleUtils from '../styles/StyleUtils';
import CONST from '../CONST';
import * as Expensicons from './Icon/Expensicons';
import defaultTheme from '../styles/themes/default';
import Icon from './Icon';

const propTypes = {
    /** Array of avatar URLs or icons */
    icons: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func])),

    /** Set the size of avatars */
    size: PropTypes.oneOf(_.values(CONST.AVATAR_SIZE)),

    /** Style for Second Avatar */
    // eslint-disable-next-line react/forbid-prop-types
    secondAvatarStyle: PropTypes.arrayOf(PropTypes.object),

    /** Tooltip for the Avatar */
    avatarTooltips: PropTypes.arrayOf(PropTypes.string),

    fallbackIcon: PropTypes.func,
};

const defaultProps = {
    icons: [],
    size: CONST.AVATAR_SIZE.DEFAULT,
    secondAvatarStyle: [StyleUtils.getBackgroundAndBorderStyle(themeColors.componentBG)],
    avatarTooltips: [],
    fallbackIcon: undefined,
};

const MultipleAvatars = (props) => {
    const avatarContainerStyles = props.size === CONST.AVATAR_SIZE.SMALL ? styles.emptyAvatarSmall : styles.emptyAvatar;
    const singleAvatarStyles = props.size === CONST.AVATAR_SIZE.SMALL ? styles.singleAvatarSmall : styles.singleAvatar;
    const secondAvatarStyles = [
        props.size === CONST.AVATAR_SIZE.SMALL ? styles.secondAvatarSmall : styles.secondAvatar,
        ...props.secondAvatarStyle,
    ];

    if (!props.icons.length) {
        return null;
    }

    if (props.icons.length === 1) {
        return (
            <View style={avatarContainerStyles}>
                <Tooltip text={props.avatarTooltips[0]}>
                    <Avatar
                        source={props.icons[0]}
                        size={props.size}
                        fill={themeColors.iconSuccessFill}
                    />
                </Tooltip>
            </View>
        );
    }

    return (
        <View style={avatarContainerStyles}>
            <View
                style={singleAvatarStyles}
            >
                <Tooltip text={props.avatarTooltips[0]} absolute>
                    <Avatar
                        imageStyles={[singleAvatarStyles]}
                        source={props.icons[0] || Expensicons.Workspace}
                        fill={defaultTheme.iconSuccessFill}
                        size={CONST.AVATAR_SIZE.SMALLER}
                    />
                </Tooltip>
                <View
                    style={secondAvatarStyles}
                >
                    {props.icons.length === 2 ? (
                        <Tooltip text={props.avatarTooltips[1]} absolute>
                            <Avatar
                                imageStyles={[singleAvatarStyles]}
                                source={props.icons[1]}
                                fallbackIcon={props.fallbackIcon}
                            />
                        </Tooltip>
                    ) : (
                        <Tooltip text={props.avatarTooltips.slice(1).join(', ')} absolute>
                            <View
                                style={[singleAvatarStyles, styles.alignItemsCenter, styles.justifyContentCenter]}
                            >
                                <Text style={props.size === CONST.AVATAR_SIZE.SMALL
                                    ? styles.avatarInnerTextSmall
                                    : styles.avatarInnerText}
                                >
                                    {`+${props.icons.length - 1}`}
                                </Text>
                            </View>
                        </Tooltip>
                    )}
                </View>
            </View>
        </View>
    );
};

MultipleAvatars.defaultProps = defaultProps;
MultipleAvatars.propTypes = propTypes;
MultipleAvatars.displayName = 'MultipleAvatars';

export default memo(MultipleAvatars);
