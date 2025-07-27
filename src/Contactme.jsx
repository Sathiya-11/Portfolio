import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import './Contactme.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div id='Contact'>
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '100%', maxWidth: '500px', padding: '20px' }} className='bg'>
        <h3 className="text-center mb-4"style={{color:'black'}}>Contact</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label style={{color:'black'}}>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label style={{color:'black'}}>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label style={{color:'black'}}>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={4}
              placeholder="Type your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Button  type="submit" className="btn">
            Send Message
          </Button>
        </Form>
      </Card>
    </Container>
    </div>
  );
};

export default ContactUs;
