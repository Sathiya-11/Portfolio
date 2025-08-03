import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import CountUp from 'react-countup';
import './Skills.css';

const skills = [
  { name: 'HTML/CSS', value: 85 },
  { name: 'Bootstrap', value: 75 },
  { name: 'JavaScript', value: 90 },
  { name: 'React JS', value: 65 }
];

const ProgressSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`progress-wrapper ${isVisible ? 'visible' : ''}`}>
      <Container>
        <Row className="justify-content-center text-start">
          <Col md={8}>
            <h2><span style={{ color: '#00A78E' }}>Why You Hire Me?</span></h2>
            <p className="text-muted">
              As a Fresher with hands-on experience in React.js and front-end development,I bring
               a strong foundation in building responsive,user-friendly interfaces using modern web
               technologies like HTML,CSS,JavaScript and Bootstrap along with React.
            </p>
            {skills.map((skill, index) => (
              <div className="mb-4" key={index}>
                <div className="d-flex justify-content-between">
                  <span><strong>{skill.name}</strong></span>
                  <span>
                    <CountUp start={0} end={isVisible ? skill.value : 0} duration={2} suffix="%" />
                  </span>
                </div>
                <ProgressBar
                  now={isVisible ? skill.value : 0}
                  variant="success"
                  style={{ transition: 'all 1.5s ease-out' }}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProgressSection;
