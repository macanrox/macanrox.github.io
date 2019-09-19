import React, { Component } from 'react';
import { 
  Row,
  Col, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText } from 'reactstrap';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <Form className="form-box" action="https://formspree.io/bprudew@gmail.com" method="POST">
        <FormText className="contact-description">
          Interested in working together? Fill out the form below with some info about your project and I will 
          get back to you as soon as I can. Please allow a couple of days for me to respond. Thank you!
        </FormText>
        <FormGroup className="contact-info">
          <Row className="text-row">
            <Col><Label for="contact-form-name">Name<span> *</span></Label></Col>
            <Col><Label for="contact-form-email">Email<span> *</span></Label></Col>
          </Row>
          <Row className="textbox-row">
            <Col><Input type="text" name="name" id="contact-name" placeholder="Name" /></Col>
            <Col><Input type="email" name="email" id="contact-email" placeholder="Email" /></Col>
            <Input type="hidden" name="_subject" id="_subject" value="Github Portfolio Contact Form" />    
          </Row>
        </FormGroup>
        <FormGroup>
          <Label for="contact-form-message">Message<span> *</span></Label>
          <Input type="textarea" name="text" id="contact-message" placeholder="Enter your message here" />
        </FormGroup>
        <Row>
          <Col>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}