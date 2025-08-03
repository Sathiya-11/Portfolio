import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './Projects.css';

function SkillCard({ ProjectData }) {
  const { title, text, link, image } = ProjectData;
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(true);
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card
        className={`skill-card text-center ${isActive ? 'clicked' : ''}`}
        onClick={handleCardClick}
      >
        {image && (
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            style={{ height: '100px', width: '75%',paddingLeft:'90px',paddingTop:'10px' }}
          />
        )}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SkillCard;
