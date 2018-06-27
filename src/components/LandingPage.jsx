import React, { Component } from 'react';
import omniLogo from '../images/omni_logo.jpeg';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div id="LandingPage space-container">
        <div id="omni-logo-container">
          <img 
            id="omni-logo"
            src={omniLogo} 
            alt="Omni Commons Logo"
          />
        </div>  
      </div>
    );
  }
}

export default LandingPage;
