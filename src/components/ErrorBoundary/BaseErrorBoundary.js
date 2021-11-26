import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /* A message posted to `onError` (along with error data) when this component intercepts an error */
    errorMessage: PropTypes.string.isRequired,

    /* A function to perform the actual logging since different platforms support different tools */
    onError: PropTypes.func,

    /* Actual content wrapped by this error boundary */
    children: PropTypes.node.isRequired,
};

const defaultProps = {
    onError: () => {},
};

/**
 * This component captures an error in the child component tree and logs it to the server
 * It can be used to wrap the entire app as well as to wrap specific parts for more granularity
 * @see {@link https://reactjs.org/docs/error-boundaries.html#where-to-place-error-boundaries}
 */
class BaseErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        this.props.onError(this.props.errorMessage, error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // For the moment we've decided not to render any fallback UI
            return null;
        }

        return this.props.children;
    }
}

BaseErrorBoundary.propTypes = propTypes;
BaseErrorBoundary.defaultProps = defaultProps;

export default BaseErrorBoundary;
