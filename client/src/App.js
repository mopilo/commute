import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from '../src/components/layouts//NavBar';
import Landing from './components/layouts/Landing';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Landing/>
      </div>
    );
  }
}

export default App;
