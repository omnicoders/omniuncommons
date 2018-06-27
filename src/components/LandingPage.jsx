import React, { Component } from 'react';
import omniLogo from '../images/omni_logo.jpeg';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div id="LandingPage space-container">
        
        <a
          href="https://omniuncommons.org/" 
          id="omni-vortex"
          className="logo-link"
        >
          <img 
            id="omni-logo"
            className="logo"
            src={omniLogo} 
            alt="Omni Commons Logo"
          />

          <div className="logo-label-container">
            <div className="logo-label">
              Omni Commons
            </div>
          </div>
          
        </a>

      </div>
    );
  }
}

export default LandingPage;
