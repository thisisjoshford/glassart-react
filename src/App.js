import React, { Component } from 'react'
import { 
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
//import Admin from './Admin.js'
import Navigation from './Navigation.js';
import Store from './Store.js';
import About from './About.js';
import Error from './Error.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navigation/>
          <Switch>
            <Route exact path='/' component={Store}/>
            <Route exact path='/about' component={About}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </Router>
      
    )
  }
}

