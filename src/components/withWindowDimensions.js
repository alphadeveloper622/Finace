import React, {Component} from 'react';
import {Dimensions} from 'react-native';

const withWindowDimensions = WrappedComponent => (
    class WindowDimensions extends Component {
        constructor(props) {
            super(props);

            this.onDimensionChange = this.onDimensionChange.bind(this);

            this.state = {
                windowDimensions: Dimensions.get('window'),
            };
        }

        componentDidMount() {
            Dimensions.addEventListener('change', this.onDimensionChange);
        }

        componentWillUnmount() {
            Dimensions.removeEventListener('change', this.onDimensionChange);
        }

        /**
         * Stores the application window's width and height in a component state variable.
         * Called each time the application's window dimensions or screen dimensions change.
         * @link https://reactnative.dev/docs/dimensions
         * @param {Object} newDimensions Dimension object containing updated window and screen dimensions
         */
        onDimensionChange(newDimensions) {
            const {window} = newDimensions;
            this.setState({windowDimensions: window});
        }

        render() {
            return (
                <WrappedComponent
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...this.props}
                    windowDimensions={this.state.windowDimensions}
                />
            );
        }
    }
);

withWindowDimensions.displayName = 'withWindowDimensions';
export default withWindowDimensions;
