import React, { Component } from 'react';
import './App.css';
import Workout from 'Workout/Workout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Training plan</h1>
        </header>
        <Workout />
      </div>
    );
  }
}

export default App;
