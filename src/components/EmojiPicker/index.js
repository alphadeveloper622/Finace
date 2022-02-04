import React from 'react';
import {Dimensions} from 'react-native';
import _ from 'underscore';
import EmojiPickerMenu from './EmojiPickerMenu';
import * as User from '../../libs/actions/User';
import CONST from '../../CONST';
import PopoverWithMeasuredContent from '../PopoverWithMeasuredContent';

class EmojiPicker extends React.Component {
    constructor(props) {
        super(props);

        this.hideEmojiPicker = this.hideEmojiPicker.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.selectEmoji = this.selectEmoji.bind(this);
        this.measureEmojiPopoverAnchorPosition = this.measureEmojiPopoverAnchorPosition.bind(this);
        this.focusEmojiSearchInput = this.focusEmojiSearchInput.bind(this);
        this.onModalHide = () => {};
        this.onEmojiSelected = () => {};

        this.state = {
            isEmojiPickerVisible: false,

            // The horizontal and vertical position (relative to the window) where the emoji popover will display.
            emojiPopoverAnchorPosition: {
                horizontal: 0,
                vertical: 0,
            },
        };
    }

    componentDidMount() {
        this.emojiPopoverDimensionListener = Dimensions.addEventListener('change', this.measureEmojiPopoverAnchorPosition);
    }

    componentWillUnmount() {
        if (!this.emojiPopoverDimensionListener) {
            return;
        }
        this.emojiPopoverDimensionListener.remove();
    }

    /**
     * Callback for the emoji picker to add whatever emoji is chosen into the main input
     *
     * @param {String} emoji
     */
    selectEmoji(emoji) {
        this.hideEmojiPicker();
        if (_.isFunction(this.onEmojiSelected)) {
            this.onEmojiSelected(emoji);
        }
    }

    hideEmojiPicker() {
        this.setState({isEmojiPickerVisible: false});
    }

    /**
     * Show the ReportActionContextMenu modal popover.
     *
     * @param {Function} [onModalHide=() => {}] - Run a callback when Modal hides.
     * @param {Function} [onEmojiSelected=() => {}] - Run a callback when Emoji selected.
     * @param {Function} [onBeforeShowEmojiPicker=() => {}] - Run a callback before showing EmojiPicker
     * @param {Element} emojiPopoverAnchor - Element to which Popover is anchored
     */
    showEmojiPicker(onModalHide, onEmojiSelected, onBeforeShowEmojiPicker, emojiPopoverAnchor) {
        if (_.isFunction(onBeforeShowEmojiPicker)) {
            onBeforeShowEmojiPicker();
        }

        this.onModalHide = onModalHide;
        this.onEmojiSelected = onEmojiSelected;
        this.emojiPopoverAnchor = emojiPopoverAnchor;

        this.setState({isEmojiPickerVisible: true});
        this.measureEmojiPopoverAnchorPosition();
    }

    measureEmojiPopoverAnchorPosition() {
        if (!this.emojiPopoverAnchor) {
            return;
        }

        this.emojiPopoverAnchor.measureInWindow((x, y, width) => this.setState({
            emojiPopoverAnchorPosition: {horizontal: x + width, vertical: y},
        }));
    }


    /**
     * Used to calculate the EmojiPicker Dimensions
     *
     * @returns {JSX}
     */
    measureContent() {
        return (
            <EmojiPickerMenu
                onEmojiSelected={this.selectEmoji}
                updatePreferredSkinTone={User.setPreferredSkinTone}
            />
        );
    }

    /**
     * Focus the search input in the emoji picker.
     */
    focusEmojiSearchInput() {
        if (!this.emojiSearchInput) {
            return;
        }
        this.emojiSearchInput.focus();
    }

    render() {
        // There is no way to disable animations and they are really laggy, because there are so many
        // emojis. The best alternative is to set it to 1ms so it just "pops" in and out
        return (
            <PopoverWithMeasuredContent
                isVisible={this.state.isEmojiPickerVisible}
                onClose={this.hideEmojiPicker}
                onModalShow={this.focusEmojiSearchInput}
                onModalHide={this.onModalHide}
                hideModalContentWhileAnimating
                animationInTiming={1}
                animationOutTiming={1}
                anchorPosition={{
                    vertical: this.state.emojiPopoverAnchorPosition.vertical,
                    horizontal: this.state.emojiPopoverAnchorPosition.horizontal,
                }}
                anchorOrigin={{
                    horizontal: CONST.MODAL.ANCHOR_ORIGIN_HORIZONTAL.LEFT,
                    vertical: CONST.MODAL.ANCHOR_ORIGIN_VERTICAL.BOTTOM,
                }}
                measureContent={this.measureContent}
            >
                <EmojiPickerMenu
                    onEmojiSelected={this.selectEmoji}
                    ref={el => this.emojiSearchInput = el}
                    updatePreferredSkinTone={User.setPreferredSkinTone}
                />
            </PopoverWithMeasuredContent>
        );
    }
}

export default EmojiPicker;
