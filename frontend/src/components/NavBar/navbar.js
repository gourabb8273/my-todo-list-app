import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { logout } from "../../store/slices/credentialSlice";
import "./navbar.css";

/**
 * Reusable navbar component
 */
function NavBar({ buttonStatus, shouldNavBarTitleRender }) {
  const history = useNavigate();
  const dispatch = useDispatch();

  /**
   *  Logout the user session
   */
  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    Cookies.remove("jwtAuth");
    history("/login");
  }

  return (
    <Navbar
      className="navbar-header"
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container>
        {shouldNavBarTitleRender && (
          <Navbar.Brand className="navbar-header_item">
            <h4> What's The Plan for Today?</h4>
          </Navbar.Brand>
        )}
        {buttonStatus && (
          <Nav className="me-auto">
            <Nav.Link
              onClick={handleLogout}
              className="navbar-header_link"
              href="/login"
            >
              {buttonStatus}
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
export default NavBar;
