import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorkoutProvider from 'WorkoutProvider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Training plan</h1>
        </header>
        <WorkoutProvider />
      </div>
    );
  }
}

export default App;
