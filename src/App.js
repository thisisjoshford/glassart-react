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
import Admin from './Admin.js';
import EditDelete from './EditDelete';
import Details from './Details.js';
import CreateType from './CreateType.js'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header/>
        <Link to ="/admin"><h4>ADMIN</h4></Link>
        <Link to ="/"><h4>SHOP</h4></Link>
        <Link to ="/about"><h4>ABOUT</h4></Link>
        <hr></hr>
          <Switch>
            <Route exact path='/' component={Store}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/admin' component={Admin}/>
            <Route exact path="/product/:productId?" component={Details}/>
            <Route exact path='/admin/create-type' component={CreateType}/>
            <Route exact path="/admin/edit/:productId" component={EditDelete}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </Router>
      
    )
  }
}

