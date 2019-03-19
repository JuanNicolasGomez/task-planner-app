import React, { Component } from 'react';

import './App.css';
import PersistentDrawerLeft from './components/Navbar.js';
import SimpleTooltips from './components/AddTooltip.js';
import TextFields from './components/TasksView.js';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import TasksList from "./components/TasksList.js";
import UpdateTask from "./components/UpdateTask.js"


class App extends Component {

  constructor(props){
    super(props);
    
  }

  
  render() {
    return (
        
          <div className="App">
            
            <Router>
              <PersistentDrawerLeft/>
              <Route exact path="/" component={TasksList}></Route>
              <Route path="/newtask" component={TextFields}></Route>
              <Route path="/updatetask" component={UpdateTask}></Route>
              <SimpleTooltips/>
            </Router>
          </div>
        
    );
  }
}

export default App;
