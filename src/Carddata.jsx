// SkillCard.js
import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import './Projects.css';

function SkillCard({ ProjectData }) {
  const { title, text, buttonText,link } = ProjectData;
const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className="skill-card text-center" style={{width:'200px'}}>
        <Card.Body>
          <Card.Title>{title}</Card.Title><br/>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary" onClick={handleClick} style={{marginLeft:'0px'}}>
            {buttonText}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SkillCard;
