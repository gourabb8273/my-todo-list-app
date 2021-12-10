import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import "./pageNotFound.css";
import NavBar from "../NavBar/navbar";

/**
 * PAGE NOT FOUND COMPONENT
 */
function PageNotFound() {
  const history = useNavigate();

  /**
   * NAVIGATE TO MAIN PAGE
   */
  function handleRedirect(e) {
    e.preventDefault();
    history("/");
  }

  return (
    <div>
      <NavBar isValidPage={false} />
      <div className="page-not__found">
        <h2>404</h2>
        <div className="page-not_found--body">
          <h3>Oops!, This Page Could Not Be Found!</h3>
          <h5>THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST</h5>
          <Button variant="primary" onClick={handleRedirect}>
            BACK TO HOME PAGE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
