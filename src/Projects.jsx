// Project.js
import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import img1 from './assets/tag.jpeg';
import img2 from './assets/tag2.jpeg';
import SkillCard from './Carddata';
import './Projects.css';

function Project() {
  const projectList = [
    {
      title: 'NBK QUICK WASH',
      text: 'Booking services and tracking order.Implemented a User-friendly with responsive design to ensure accessibility on all device.',
      buttonText: 'CLICK ME',
      link:'https://sathiya-11.github.io/NBK-PROJECT/',
      image:img1,
      
    },
    {
      title: 'QUIZ APP',
      text: 'Build a dynamic quiz app using React,allowing users to answer questions and view results in real-time.',
      buttonText: 'CLICK ME',
      link:' https://sathiya-11.github.io/Quiz/',
      image:img2,
    
    },
    
  ];
  

  return (
    <div id='project'>
    <Container>
        <Row xs={12} md='auto' className="justify-content-center mt-5">
         <Col xs="auto" className='text-center'><h2 className='fw-bold' style={{color:'#00A78E'}}>PROJECTS</h2>
            </Col>
            </Row><br/><br/>
      <Row className="card-wrapper justify-content-center">
        {projectList.map((data, idx) => (
          <SkillCard key={idx} ProjectData={data} />
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default Project;
