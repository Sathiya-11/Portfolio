import React from 'react';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg"  variant="dark" sticky="top" className='bg'>
      <Container>
        
        <Navbar.Brand href="/" style={{color:'black'}}>DEVPOLIO</Navbar.Brand>

        
        <Navbar.Toggle aria-controls="navbar-nav" />

        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link href="#home"style={{color:'black'}} >Home</Nav.Link>
            <Nav.Link href="#skill" style={{color:'black'}}>Skills</Nav.Link>
            <Nav.Link href="#project"style={{color:'black'}}>Projects</Nav.Link>
            <Nav.Link href="#Contact"style={{color:'black'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
