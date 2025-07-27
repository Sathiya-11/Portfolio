import React from 'react'

import './Detials.css'
import { Image } from 'react-bootstrap';
import myimage from './assets/photo.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Home() {
  // const handleClick = () => {
  //   if (link) {
  //     window.open(link, '_blank', 'noopener,noreferrer');
  //   }
  // };
  return (
    <div className='slanted-bg' id='home'>
     
    <Container>
      <Row>
         <Col xs={12} md={6} lg={4} style={{color:'black',marginTop:'30px', fontSize:'50px'}}>Hi, I am<br/>
        <b>Sathiyabama Ramanujam,</b><br/>
        Front-end Developer<br/>
        <a href="https://github.com/Sathiya-11?tab=repositories" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-sm text-dark"></i>
      </a>
      <a href="https://www.linkedin.com/in/sathiya2002/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin fa-sm text-dark"></i>
      </a>
      <a href="mailto:bamasathiya37@gmail.com">
        <i className="fas fa-envelope fa-sm text-dark"></i>
      </a>
        </Col>
        <Col xs={12} md={6} lg={4} style={{marginTop:'50px',marginLeft:'350px'}}><Image src={myimage} className='profile-img' roundedCircle/></Col>
       
      </Row>
    </Container>
    </div>
  );
}

export default Home;