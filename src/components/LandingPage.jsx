import React, { Component } from 'react';
import './LandingPage.css';

import Space from './Space';
import Orbit from './Orbit';
import Planet from './Planet';

import omniLogo from '../images/omni_logo.jpeg';
import planetImage from '../images/planet.png';

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
            zIndex="20"
          />

          <Orbit
            width="40vw"
            height="40vw"
            top="calc(50% - 20vw)"
            left="calc(50% - 20vw)"
            zIndex="10"            
          >
            <Planet 
              hasExternalLink
              inOrbit
              linkTo="https://sudoroom.org/"
              label="Sudo Room"
              imageSrc={planetImage}
              imageAlt="Sudo Room"
              width="6vw"
              top="calc(50% - 3vw)"
              left="calc(50% - 3vw)"
            />
          </Orbit>
          <Orbit
            width="56vw"
            height="56vw"
            top="calc(50% - 28vw)"
            left="calc(50% - 28vw)"
            zIndex="9"            
          >
            <Planet 
              hasExternalLink
              inOrbit
              linkTo="https://sudoroom.org/"
              label="Counter Culture Labs"
              imageSrc={planetImage}
              imageAlt="Counter Culture Labs"
              width="6vw"
              top="calc(50% - 3vw)"
              left="calc(50% - 3vw)"
            />
          </Orbit>
        </Space>
      </div>
    );
  }
}

export default LandingPage;
