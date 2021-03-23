import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'underscore';
import styles from '../../../styles/styles';
import themeColors from '../../../styles/themes/default';
import emojis from '../../../../assets/emojis';
import EmojiPickerMenuItem from './EmojiPickerMenuItem';
import TextInputFocusable from '../../../components/TextInputFocusable';

const propTypes = {
    // Controls the visibility of this component.
    isVisible: PropTypes.bool,
    addEmojiToTextBox: PropTypes.func.isRequired,
};

const defaultProps = {
    isVisible: false,
};

class EmojiPickerMenu extends Component {
    constructor(props) {
        super(props);

        this.filterEmojis = _.debounce(this.filterEmojis.bind(this), 500, false);
        this.state = {
            filteredEmojis: emojis,
            headerIndices: [0, 35, 61, 89, 100, 122, 149],
        };
    }

    filterEmojis(searchTerm) {
        if (searchTerm === '') {
            this.setState({filteredEmojis: emojis});
            return;
        }
        const newFilteredEmojiList = [];
        emojis.forEach((emoji) => {
            if (!emoji.header && emoji.code !== 'BLANK' && emoji.code !== 'HEADER_BAR') {
                emoji.keywords.forEach((keyword) => {
                    if (keyword.includes(searchTerm)) {
                        newFilteredEmojiList.push(emoji);
                    }
                });
            }
        });

        this.setState({filteredEmojis: newFilteredEmojiList});
    }

    renderItem({item}, addEmojiToTextBox) {
        if (item.code === 'BLANK') {
            return;
        }

        if (item.code === 'HEADER_BAR') {
            return (
                <View style={{backgroundColor: themeColors.hoverComponentBG, width: 15}} />
            );
        }
        if (item.header) {
            return (
                <Text style={styles.emojiHeaderStyle}>
                    {item.code}
                </Text>
            );
        }

        return (
            <EmojiPickerMenuItem
                onPress={addEmojiToTextBox}
                emoji={item.code}
            />
        );
    }

    render() {
        return (
            this.props.isVisible && (
                <View>
                    <TextInputFocusable
                        textAlignVertical="top"
                        placeholder="Search"
                        placeholderTextColor={themeColors.textSupporting}
                        onChangeText={this.filterEmojis}
                        style={[styles.textInputEmojiSearch, styles.flex4]}
                        defaultValue=""
                        ref={el => this.searchInput = el}
                    />
                    <FlatList
                        data={this.state.filteredEmojis}
                        renderItem={item => this.renderItem(item, this.props.addEmojiToTextBox)}
                        keyExtractor={item => (`emoji_picker_${item.code}`)}
                        numColumns={8}
                        style={{height: 300}}
                        extraData={this.state.filteredEmojis}
                        stickyHeaderIndices={this.state.headerIndices}
                    />
                </View>
            ));
    }
}

EmojiPickerMenu.propTypes = propTypes;
EmojiPickerMenu.defaultProps = defaultProps;

export default EmojiPickerMenu;
