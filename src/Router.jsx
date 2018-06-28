import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import OmniPage from './components/OmniPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

class Router extends Component {
  render() {
    const landingPage = (props) => {
      return (
        <LandingPage 
          {...props}
          {...this.props}
        />
      );
    };
    const omniPage = (props) => {
      return (
        <OmniPage 
          {...props}
          {...this.props}
        />
      );
    }; 
    const loginPage = (props) => {
      return (
        <LoginPage 
          {...props}
          {...this.props}
        />
      );
    };
    const signupPage = (props) => {
      return (
        <SignupPage 
          {...props}
          {...this.props}
        />
      );
    };    
    return (
      <main>
        <Switch>
          <Route exact path='/' component={landingPage}/>
          <Route exact path='/omni-commons' component={omniPage}/>
          <Route exact path='/login' component={loginPage}/>
          <Route exact path='/signup' component={signupPage}/>
        </Switch>
      </main>
    );
  }
}

export default Router;
