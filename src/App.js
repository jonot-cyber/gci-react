import React, { Component } from 'react';
import logo from './assets/img/gci.png';
import './App.css';

class App extends Component {
  componentDidMount(){
    document.title = "GCI-2019-REACT-APP-jonot"
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Google Code-in 2019</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
