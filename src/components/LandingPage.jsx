import React, { Component } from 'react';
import omniLogo from '../images/omni_logo.jpeg';
import './LandingPage.css';
import Space from './Space';
import Planet from './Planet';

class LandingPage extends Component {
  render() {
    return (
      <div id="LandingPage">
        <Space>
          <Planet 
            hasExternalLink
            linkTo="https://omniuncommons.org/"
            label="Omni Commons"
            imageSrc={omniLogo}
            imageAlt="Omni Commons Logo"
            width="24vw"
            top="calc(50% - 12vw)"
            left="calc(50% - 12vw)"
          />
        </Space>
      </div>
    );
  }
}

export default LandingPage;
