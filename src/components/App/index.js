import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Apple, Orange, Robot } from '../Icons';
import Content from '../Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <div className="icon">
              <Apple />
            </div>
            <div className="icon">
              <Robot />
            </div>
            <div className="icon">
              <Orange />
            </div>
          </div>
          <Link to="/">
            <h1 className="App-title">Showdown!</h1>
          </Link>
        </header>
        <Content />
      </div>
    );
  }
}

export default App;
