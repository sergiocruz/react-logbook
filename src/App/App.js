import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Logbook
import Logbook from '../Logbook';
import { data } from './mock.data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reactttt</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="container">
          <Logbook entries={data} />
        </div>

      </div>
    );
  }
}

export default App;
