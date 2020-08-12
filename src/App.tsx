import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

export default class App extends React.Component<{},{}> {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Login/>
          </header>
        </div>
    );
  }


}
