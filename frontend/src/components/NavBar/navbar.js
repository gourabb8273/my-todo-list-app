import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import './navbar.css';
import { logout } from '../../store/slices/credentialSlice';

function NavBar(props) {
  const history = useNavigate();
  const dispatch = useDispatch();

  /**
   *  LOGOUT THE USER SESSION
   */
  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    history('/login')
  }

  return (
    <Navbar className="navbar-header" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="navbar-header_item" href="#">What's The Plan for Today?</Navbar.Brand>
        {props.statusButton && <Nav className="me-auto">
          <Nav.Link onClick={handleLogout} className="navbar-header_link" href="/login">{props.statusButton}</Nav.Link>
        </Nav>}
      </Container>
    </Navbar>

  )
}
export default NavBar;