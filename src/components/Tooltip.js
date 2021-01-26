import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, Text, View} from 'react-native';
import Hoverable from './Hoverable';
import getTooltipStyles from '../styles/getTooltipStyles';

const propTypes = {
    // The text to display in the tooltip.
    text: PropTypes.string.isRequired,

    // Child to wrap with Tooltip. Must be only child.
    children: PropTypes.node.isRequired,
};

class Tooltip extends Component {
    constructor(props) {
        super(props);

        this.animation = new Animated.Value(0);

        // The wrapper view containing the wrapped content along with the Tooltip itself.
        this.wrapperView = null;
        this.width = 0;
        this.height = 0;

        // The tooltip (popover) itself.
        this.tooltip = null;
        this.tooltipWidth = 0;
        this.tooltipHeight = 0;

        // The distance between the left side of the rendered view and the left side of the window
        this.xOffset = 0;

        // The distance between the top of the rendered view and the top of the window
        this.yOffset = 0;

        this.getPosition = this.getPosition.bind(this);
        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);
    }

    /**
     * Get the position and measure the size of the wrapper view and the tooltip itself.
     */
    getPosition() {
        this.wrapperView.measureInWindow((x, y, width, height) => {
            this.xOffset = x;
            this.yOffset = y;
            this.width = width;
            this.height = height;
        });
        this.tooltip.measureInWindow((x, y, width, height) => {
            this.tooltipWidth = width;
            this.tooltipHeight = height;
        });
    }

    /**
     * Display the tooltip in an animation.
     */
    showTooltip() {
        Animated.timing(this.animation, {
            toValue: 1,
            duration: 140,
        }).start();
    }

    /**
     * Hide the tooltip in an animation.
     */
    hideTooltip() {
        Animated.timing(this.animation, {
            toValue: 0,
            duration: 140,
        }).start();
    }

    render() {
        const interpolatedSize = this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });
        const {
            animationStyle,
            tooltipWrapperStyle,
            tooltipTextStyle,
            pointerWrapperStyle,
            pointerStyle,
        } = getTooltipStyles(
            interpolatedSize,
            this.xOffset,
            this.yOffset,
            this.width,
            this.height,
            this.tooltipWidth,
            this.tooltipHeight,
        );

        return (
            <Hoverable
                onHoverIn={this.showTooltip}
                onHoverOut={this.hideTooltip}
            >
                <View
                    ref={el => this.wrapperView = el}
                    onLayout={this.getPosition}
                    collapsable={false}
                >
                    <Animated.View style={animationStyle}>
                        <View
                            ref={el => this.tooltip = el}
                            onLayout={this.getPosition}
                            style={tooltipWrapperStyle}
                        >
                            <Text style={tooltipTextStyle} numberOfLines={1}>{this.props.text}</Text>
                        </View>
                        <View style={pointerWrapperStyle}>
                            <View style={pointerStyle} />
                        </View>
                    </Animated.View>
                    {this.props.children}
                </View>
            </Hoverable>
        );
    }
}

Tooltip.propTypes = propTypes;
export default Tooltip;
