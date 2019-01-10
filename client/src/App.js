import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {NavBar} from '../src/components/layouts//NavBar';
import {Landing} from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login'
import {Provider} from 'react-redux';
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
