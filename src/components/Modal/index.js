import React from 'react';
import PropTypes from 'prop-types';
import {View, useWindowDimensions} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import CustomStatusBar from '../CustomStatusBar';
import {getSafeAreaPadding} from '../../styles/styles';
import themeColors from '../../styles/themes/default';
import getStyleForType from './getStyleForType';
import MODAL_TYPE from './MODAL_TYPE';

const propTypes = {
    // Callback method fired when the user requests to close the modal
    onClose: PropTypes.func.isRequired,

    // State that determines whether to display the modal or not
    isVisible: PropTypes.bool.isRequired,

    // Modal contents
    children: PropTypes.node.isRequired,

    // Style of modal to display
    type: PropTypes.oneOf([
        MODAL_TYPE.CENTERED,
    ]),

    // Background color for the modal
    backgroundColor: PropTypes.string,
};

const defaultProps = {
    type: '',
    backgroundColor: themeColors.componentBG,
};

const Modal = (props) => {
    const {
        modalStyle,
        modalContainerStyle,
        swipeDirection,
        animationIn,
        animationOut,
        needsSafeAreaPadding
    } = getStyleForType(props.type, useWindowDimensions());

    return (
        <ReactNativeModal
            onBackdropPress={props.onClose}
            onBackButtonPress={props.onClose}
            onSwipeComplete={props.onClose}
            swipeDirection={swipeDirection}
            isVisible={props.isVisible}
            backdropOpacity={0.3}
            backdropTransitionOutTiming={0}
            style={modalStyle}
            animationIn={animationIn}
            animationOut={animationOut}
        >
            <CustomStatusBar />
            <SafeAreaInsetsContext.Consumer>
                {(insets) => {
                    const {paddingTop, paddingBottom} = getSafeAreaPadding(insets);
                    return (
                        <View
                            style={{
                                backgroundColor: props.backgroundColor,
                                paddingBottom,
                                ...modalContainerStyle,
                                paddingTop: needsSafeAreaPadding ? paddingTop : 20,
                            }}
                        >
                            {props.children}
                        </View>
                    );
                }}
            </SafeAreaInsetsContext.Consumer>
        </ReactNativeModal>
    );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.displayName = 'Modal';
export default Modal;
