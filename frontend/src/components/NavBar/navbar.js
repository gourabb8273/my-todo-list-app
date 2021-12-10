import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./navbar.css";
import { logout } from "../../store/slices/credentialSlice";

/**
 * REUSEABLE NAVBAR COMPONENT
 */
function NavBar({ statusButton, isValidPage }) {
  const history = useNavigate();
  const dispatch = useDispatch();

  /**
   *  LOGOUT THE USER SESSION
   */
  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    Cookies.remove("jwtAuth");
    history("/login");
  }

  return (
    <Navbar className="navbar-header" expand="lg" bg="dark" variant="dark">
      <Container>
        {isValidPage && (
          <Navbar.Brand className="navbar-header_item">
            What's The Plan for Today?
          </Navbar.Brand>
        )}
        {statusButton && (
          <Nav className="me-auto">
            <Nav.Link
              onClick={handleLogout}
              className="navbar-header_link"
              href="/login"
            >
              {statusButton}
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
export default NavBar;
