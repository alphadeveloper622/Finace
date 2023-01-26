import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, View} from 'react-native';
import Icon from '../Icon';
import variables from '../../styles/variables';
import styles from '../../styles/styles';
import colors from '../../styles/colors';
import * as StyleUtils from '../../styles/StyleUtils';
import getButtonState from '../../libs/getButtonState';

const propTypes = {
    /** The unicode that is used to display the emoji */
    emoji: PropTypes.func.isRequired,

    /** The function to call when an emoji is selected */
    onPress: PropTypes.func.isRequired,

    /** Handles what to do when we hover over this item with our cursor */
    onHoverIn: PropTypes.func,

    /** Handles what to do when the hover is out */
    onHoverOut: PropTypes.func,

    /** Whether this menu item is currently highlighted or not */
    isHighlighted: PropTypes.bool,
};

const CategoryShortcutButton = props => (
    <Pressable
        onPress={props.onPress}
        onHoverIn={props.onHoverIn}
        onHoverOut={props.onHoverOut}
        style={({pressed}) => ([
            StyleUtils.getButtonBackgroundColorStyle(getButtonState(false, pressed)),
            props.isHighlighted && styles.emojiItemHighlighted,
            styles.categoryShortcutButton,
        ])}
    >
        <View style={styles.alignSelfCenter}>
            <Icon
                fill={colors.green}
                src={props.emoji}
                height={variables.iconSizeNormal}
                width={variables.iconSizeNormal}
            />
        </View>
    </Pressable>

);
CategoryShortcutButton.propTypes = propTypes;
CategoryShortcutButton.displayName = 'CategoryShortcutButton';
CategoryShortcutButton.defaultProps = {
    isHighlighted: false,
    onHoverIn: () => {},
    onHoverOut: () => {},
};

export default CategoryShortcutButton;
