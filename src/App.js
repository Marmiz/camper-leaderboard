import React, { Component } from 'react';
import './App.css';
import Table from './components/Table'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="title is-1">Camper leaderboard</h2>
          <p className="subtitle is-3">A React study project made with <i className="fa fa-heart fa-big"></i></p>
        </div>
        <Table />
      </div>
    );
  }
}

export default App;
