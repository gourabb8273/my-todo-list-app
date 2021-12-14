import React from "react";
import { Spinner } from "react-bootstrap";

import "./loadingSpinner.css";

/**
 * LOADING SPINNER COMPONENT
 */
function LoadingSpinner() {
  return (
    <Spinner className="loading-spinner" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default LoadingSpinner;
