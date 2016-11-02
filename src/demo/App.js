import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Logbook</h1>
          <div className="App-intro">
            <ul className="App-menu">
              <li>Demos:</li>
              <li>
                <Link to="/inline" activeClassName="active">inline</Link>
              </li>
              <li>
                <Link to="/ajax" activeClassName="active">ajax</Link>
              </li>
              <li>
                <Link to="/firebase" activeClassName="active">firebase</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
