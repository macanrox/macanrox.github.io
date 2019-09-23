import React from 'react';
import { 
  Row,
  Col, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

export default function Contact () {
  return (
    <Form className="form-box" action="https://formspree.io/bprudew@gmail.com" method="POST">
      <FormText className="contact-description">
        Interested in working together? Fill out the form below with some info about your project and I will 
        get back to you as soon as I can. Please allow a couple of days for me to respond. Thank you!
      </FormText>
      <FormGroup className="contact-info">
        <Row className="text-row">
          <Col><Label for="contact-form-name">Name</Label></Col>
          <Col><Label for="contact-form-email">Email</Label></Col>
        </Row>
        <Row className="textbox-row">
          <Col><Input type="text" name="name" id="contact-name" required="required" placeholder="Name" /></Col>
          <Col><Input type="email" name="email" required="required" id="contact-email" placeholder="Email" /></Col>
          <Input type="hidden" name="_subject" id="_subject" value="Github Portfolio Contact Form" />    
        </Row>
      </FormGroup>
      <FormGroup>
        <Label for="contact-form-message">Message</Label>
        <Input type="textarea" name="text" id="contact-message" placeholder="Your message" />
      </FormGroup>
      <Row>
        <Col>
          <Button><FontAwesomeIcon className="button-icon" icon={["far", "paper-plane"]} />Get in touch!</Button>
        </Col>
      </Row>
    </Form>
  );
}
