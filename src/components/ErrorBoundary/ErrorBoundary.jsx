import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }; // Initializing state in constructor
    }
    // Static method that gets called when an error is thrown by a child component
    static getDerivedStateFromError() {
        // This lifecycle method(getDerivedStateFromError) allows the component to update its state based on the error
        return { hasError: true};
    }

    // Lifecycle method that get called after an error is thrown
    componentDidCatch(error, errorInfo) {
        // Logs the error and additional error information to the console
        console.error('Error Caught By ErrorBoundary: ', error, errorInfo)
    }

    // Check if the hasError is true and render the fallback UI
    render () {
        if (this.state.hasError) {
            // Render the custom fallback UI
            return <div className="error-boundary">Something went wrong. Please try again later.</div>;
        }

        return this.props.children;
    }
};

// Props validation
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;

