import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Router from './Router';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
