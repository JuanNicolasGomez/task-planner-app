import React, { Component } from 'react';

import './App.css';
import PersistentDrawerLeft from './components/Navbar.js'
import SimpleTooltips from './components/AddTooltip.js'
import TextFields from './components/TasksView.js'
import TodoList from './components/TodoList.js'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <PersistentDrawerLeft/>
             <Route exact path="/" component={TodoList}></Route>
             <Route path="/newtask" component={TextFields}></Route>


            <SimpleTooltips/>
          </div>
        </Router>
    );
  }
}

export default App;
