import React, { Component } from 'react';
import './Orbit.css';

class Orbit extends Component {
  render() {
    let orbitStyles = {
      'left': `${this.props.left || '0'}`,
      'top': `${this.props.top || '0'}`,
      'width': `${this.props.width || '150px'}`,
      'height': `${this.props.height || '150px'}`,
      'zIndex': `${this.props.zIndex || '0'}`
    };
    return (
      <div 
        className="Orbit"
        style={orbitStyles}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Orbit;  

