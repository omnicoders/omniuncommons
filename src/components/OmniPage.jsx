import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './OmniPage.css';

class OmniPage extends Component {
  render() {
    return (
      <div className="OmniPage">
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title mb-0">Welcome To The Omni Commons</h3>
                </div>
                <div className="card-body">
                  {(this.props.isLoggedIn) ? (
                    <p className="card-text">
                      You are currently logged in.<br/><br/>
                      <a href="" onClick={this.props.logoutCurrentUser.bind(this)}>Logout</a>
                    </p>
                  ) : (
                    <p className="card-text">
                      You are not logged in.<br/><br/>
                      <Link to="/login">Login</Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>          
      </div>
    );
  }
}

export default OmniPage;
  