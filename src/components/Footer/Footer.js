import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { socialButtons } from '../../data/social-media-icons';
library.add( fab, far );

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className='site-footer'>
        <div id="social-media" className="fa-2x">
          {socialButtons.map(socialButton => {
            return <a href={socialButton.link}>
            <FontAwesomeIcon className="social-media-icons" key={socialButton.name} icon={[`${socialButton.type}`, `${socialButton.name}`]} />
            </a>;
          })}
        </div>
        <div><span id="credit">2018&nbsp;&nbsp;&nbsp;</span></div>
      </Container>
    );
  }
}
