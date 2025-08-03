import { useEffect, useState } from 'react';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); 
  }, []);
  return (
    <Navbar expand="lg" sticky="top" style={{background:"#00A78E"}} className={`animated-navbar ${isVisible ? 'visible' : ''}`}>
      <Container>
        
        <Navbar.Brand href="/" style={{ color:'white'}}><b>DEVPOLIO</b></Navbar.Brand>

        
        <Navbar.Toggle aria-controls="navbar-nav" />

        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link href="#home"style={{color:'white'}} >Home</Nav.Link>
            <Nav.Link href="#skill" style={{color:'white'}}>Skills</Nav.Link>
            <Nav.Link href="#project"style={{color:'white'}}>Projects</Nav.Link>
            <Nav.Link href="#Contact"style={{color:'white'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
