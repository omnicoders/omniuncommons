import React, { Component } from 'react';
import './Space.css';

class Space extends Component {
  render() {
    return (
      <div className="Space">
        {this.props.children}
      </div>
    );
  }
}

export default Space;  