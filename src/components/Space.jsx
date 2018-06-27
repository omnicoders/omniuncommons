import React, { Component } from 'react';
import './Space.css';

class Space extends Component {
  render() {
    return (
      <div id="Space">
        {this.props.children}
      </div>
    );
  }
}

export default Space;  