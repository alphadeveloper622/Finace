import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Pressable, View} from 'react-native';
import Icon from '../Icon';
import variables from '../../styles/variables';
import styles from '../../styles/styles';
import colors from '../../styles/colors';
import * as StyleUtils from '../../styles/StyleUtils';
import getButtonState from '../../libs/getButtonState';

const propTypes = {
    /** The icon representation of the category that this button links to */
    icon: PropTypes.func.isRequired,

    /** The function to call when an emoji is selected */
    onPress: PropTypes.func.isRequired,

    /** The width of the button based on whether there are 8 or 9 buttons */
    // eslint-disable-next-line react/forbid-prop-types
    widthStyle: PropTypes.object.isRequired,
};

class CategoryShortcutButton extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isHighlighted: false,
        };
    }

    render() {
        return (
            <Pressable
                onPress={this.props.onPress}
                onHoverIn={() => this.setState({isHighlighted: true})}
                onHoverOut={() => this.setState({isHighlighted: false})}
                style={({pressed}) => ([
                    StyleUtils.getButtonBackgroundColorStyle(getButtonState(false, pressed)),
                    styles.categoryShortcutButton,
                    this.state.isHighlighted && styles.emojiItemHighlighted,
                    this.props.widthStyle,
                ])}
            >
                <View style={styles.alignSelfCenter}>
                    <Icon
                        fill={colors.gray3}
                        src={this.props.icon}
                        height={variables.iconSizeNormal}
                        width={variables.iconSizeNormal}
                    />
                </View>
            </Pressable>
        );
    }
}
CategoryShortcutButton.propTypes = propTypes;

export default CategoryShortcutButton;
