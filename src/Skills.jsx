import React from 'react'

import './Skills.css';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import html  from './assets/HTML1.jpeg';
import css from'./assets/css.jpeg';
import js from './assets/js.jpeg';
import react from './assets/reactjs.jpeg';
import bootstrap from './assets/bootstrap.jpeg';

function Skills() {
  return (
     <div id='skill'>
    <Container fluid className="skills-section" style={{maxWidth:"900px"}}>
        <Row  xs={12} md='auto' className="justify-content-center mt-5">
            <Col xs="auto" className='text-center'><h2 className='fw-bold'>SKILLS</h2>
            </Col>
             </Row>
      <Row className="d-flex justify-content-between align-items-center p-5">
         <Col className='text-center' xs={12} md='auto'style={{paddingBlockEnd:"10px"}}><Image src={html} className='w-50' /><br/><b style={{paddingLeft:"30px"}}>HTML</b> </Col>
        <Col className='text-center' xs={12} md='auto'style={{columnGap:"10px"}}><Image src={css} className='w-50'/> <br/><b style={{paddingLeft:"30px"}}>CSS</b> </Col>
        <Col className='text-center' xs={12} md='auto'><Image src={js} className='w-50'/> <br/><b>JAVASCRIPT</b> </Col>
      </Row>
       <Row className="d-flex justify-content-between align-items-center p-5">
         <Col xs={12} md='auto'style={{paddingLeft:"150px"}} className='react-img'><Image src={react} className='w-50'  /><br/><br/><b style={{paddingLeft:"10px"}}>REACT JS</b> </Col>
        <Col  xs={12} md='auto'style={{paddingRight:"150px"}} className='boot-img'><Image src={bootstrap} className='w-50'/> <br/><b style={{paddingLeft:"20px"}}>BOOTSTRAP</b> </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Skills;