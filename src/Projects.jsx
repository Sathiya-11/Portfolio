// Project.js
import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import SkillCard from './Carddata';
import './Projects.css';

function Project() {
  const projectList = [
    {
      title: 'NBK QUICK WASH',
      text: 'Booking services and tracking order.Implemented a User-friendly with responsive design to ensure accessibility on all device.',
      buttonText: 'CLICK ME',
      link:'https://sathiya-11.github.io/NBK-PROJECT/',
    },
    {
      title: 'QUIZ APP',
      text: 'Build a dynamic quiz app using React,allowing users to answer questions and view results in real-time.',
      buttonText: 'CLICK ME',
      link:'https://sathiya-11.github.io/NBK-PROJECT/',
    },
    {
      title: 'PORTFOLIO',
      text: 'A Personal Portfolio built with React JS and Bootstrap 5. Showcases my Projects,skills, and contact details in a clean and responsive layout.',
      buttonText: 'CLICK ME',
      link:'https://Sathiya-11.github.io/NBK-Portfolio/',
    },
  ];

  return (
    <div id='project'>
    <Container>
        <Row xs={12} md='auto' className="justify-content-center mt-5">
         <Col xs="auto" className='text-center'><h2 className='fw-bold'>PROJECTS</h2>
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
