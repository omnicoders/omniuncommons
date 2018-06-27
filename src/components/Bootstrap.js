import React, { Component } from 'react';

export class Container extends Component {
  render() {
    return (
      <div className="Container container-fluid">
        {this.props.children}
      </div>
    );
  }
}

export class Row extends Component {
  render() {
    return (
      <div className="Row row">
        {this.props.children}
      </div>
    );
  }
}

export class Column extends Component {
  render() {
    let classNames = 'Column'; 
    const hasColumnsProp = this.props.columns && Number(this.props.columns) > 0;
    if(hasColumnsProp){ 
      classNames += ` col-${this.props.columns}`; 
    } else {
      classNames += ' col'
    }
    const hasSmallProp = this.props.small && Number(this.props.small) > 0;
    if(hasSmallProp){ classNames += ` col-sm-${this.props.small}`; }
    const hasMedProp = this.props.medium && Number(this.props.medium) > 0;
    if(hasMedProp){ classNames += ` col-md-${this.props.medium}`; }
    const hasLargeProp = this.props.large && Number(this.props.large) > 0;
    if(hasLargeProp){ classNames += ` col-lg-${this.props.large}`; }
    return (
      <div className={classNames}>
        {this.props.children}
      </div>
    );
  }
}
