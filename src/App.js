import React, { Component } from 'react';
import logo from './filmreel.png';
import './App.css';

import List from './List.js';
import filmJSON from './wiff.json';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header row">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-header-text">
            <h1>WIFF</h1>
            <h2>Films On Deck</h2>
          </div>
        </div>
        <List filmList={filmJSON} />
        <div className="App-footer">Copyright &copy; Bull Rush Studios Inc.</div>
      </div>
    );
  }
}

export default App;
