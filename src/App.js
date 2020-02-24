import React, { Component } from 'react'
import { 
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
//import Admin from './Admin.js'
import Header from './Header.js';
import Store from './Store.js';
import About from './About.js';
import Error from './Error.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header/>
        <Link to ="/"><h4>Shop</h4></Link>
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

