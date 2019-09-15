import React, { Component } from 'react';
import { 
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
      <Form action="https://formspree.io/bprudew@gmail.com" method="POST">
        <FormGroup>
          <Label for="contact-form-email">Email</Label>
          <Input type="email" name="email" id="contact-email" placeholder="Enter your email here" /> 
          <Input type="hidden" name="_subject" id="_subject" value="Github Contact Form" />    
        </FormGroup>
        <FormGroup>
          <Label for="contact-form-message">Message</Label>
          <Input type="textarea" name="text" id="contact-message" placeholder="Enter your message here" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}