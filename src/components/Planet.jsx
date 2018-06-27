import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Planet.css';

class Planet extends Component {
  render() {
    let linkStyles = {
      'left': `${this.props.left || '0'}`,
      'top': `${this.props.top || '0'}`,
      'width': `${this.props.width || '150px'}`
    };
    return (
      <div class="Planet">
        {(this.props.hasExternalLink) ? (
          <a
            href={this.props.linkTo}
            className="planet-link"
            style={linkStyles}
          >
            <img 
              className="planet-image"
              src={this.props.imageSrc} 
              alt={this.props.imageAlt}
            />

            <div className="planet-label-container">
              <div className="planet-label">
                Omni Commons
              </div>
            </div>
            
          </a>
        ) : (
          <Link
            to={this.props.linkTo || "/"}
            className="planet-link"
            style={linkStyles}
          >
            <img 
              className="planet-image"
              src={this.props.imageSrc} 
              alt={this.props.imageAlt}
            />

            <div className="planet-label-container">
              <div className="planet-label">
                {this.props.label}
              </div>
            </div>
            
          </Link>
        )}
      </div>
    );
  }
}

export default Planet;  