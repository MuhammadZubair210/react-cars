import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './components/welcome';
import CustomizeComponent from './components/customize';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome/>
        <CustomizeComponent/>
      </div>
    );
  }
}

export default App;
