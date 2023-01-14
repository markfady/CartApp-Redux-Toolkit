import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function AppNavbar() {
    return (
        <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className='navbar-brand'>CartApp</Link> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className='nav-link'>Products</Link>
        <Link to="/cart" className='nav-link'>Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
)
}
