import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Auth from './modules/Auth';
import Router from './Router';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      redirectHome: false,
      isLoggedIn: false,
      currentUser: {}
    };
    this.loginCurrentUser = this.loginCurrentUser.bind(this);
    this.logoutCurrentUser = this.logoutCurrentUser.bind(this);    
  }  

  loginCurrentUser() {
    let config = {
        'headers': {
          'authorization': `Bearer ${Auth.getToken()}`,
        }
    };
    console.log(config);
    axios.get('https://api.omniuncommons.org/api/dashboard', config)
    .then(res => {
      this.setState({
        isLoggedIn: true,
        currentUser: res.data.user
      });
    });
  }

  logoutCurrentUser() {
    Auth.deauthenticateUser();
    this.setState({
      redirectHome: true,
      isLoggedIn: false,
      currentUser: {}
    });
  }

  componentDidMount() {
    //Auth.deauthenticateUser();
    if(Auth.isUserAuthenticated()){
      this.loginCurrentUser()
    } 
  }

  render() {
    return (
      <div className="App">
        <Router 
          {...this.state}
          loginCurrentUser={this.loginCurrentUser}
          logoutCurrentUser={this.logoutCurrentUser}
        />
      </div>
    );
  }
}

export default App;