import React from 'react';
import { Container } from 'reactstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialButtons } from '../../data/social-media-icons';

export default function Footer() {
  return (
    <Container fluid className='site-footer'>
      <div id="social-media" className="fa-2x">
        {socialButtons.map(socialButton => {
          return <a href={socialButton.link}>
          <FontAwesomeIcon 
            className="social-media-icons" 
            key={socialButton.name} 
            icon={[`${socialButton.type}`, `${socialButton.name}`]} />
          </a>;
        })}
      </div>
      <div><span id="credit">2018&nbsp;&nbsp;&nbsp;</span></div>
    </Container>
  );
}
