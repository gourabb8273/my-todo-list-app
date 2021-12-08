import React from 'react';
import { Spinner } from 'react-bootstrap';

/**
 * LOADING SPINNER COMPONENT
 */
function LoadingSpinner() {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}


export default LoadingSpinner;