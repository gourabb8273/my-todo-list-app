import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './navbar.css';

function NavBar(props){
    return(
        // <div className="navbar-list__item">
        //     <h1>What's The Plan for Today?</h1>
        // </div>
        <Navbar className="navbar-header" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="navbar-header_item" href="#">What's The Plan for Today?</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  className="navbar-header_link" href="#login">Login</Nav.Link>            
            </Nav>
        </Container>
      </Navbar>
        
    )
}
export default NavBar;