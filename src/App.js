import React, { Component } from 'react';

import './App.css';
import PersistentDrawerLeft from './components/Navbar.js'
import SimpleTooltips from './components/AddTooltip.js'
import TextFields from './components/TasksView.js'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import TasksList from "./components/TasksList.js"


class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      tasksList:[],
    };
  }

  componentDidMount() {
    console.log("EEHHHH");
    fetch('http://localhost:8080/taskslist')
        .then(
          response => response.json()
         )
        .then(data => {
            console.log("EEHHHH2");
            
            let tasksList = [];
            
            data.forEach(function (task) {
                
                tasksList.push(task)

            });
            this.setState({tasksList: tasksList});
            console.log("EEHHHH3");
        });
  }
  render() {
    return (
        <Router>
          <div className="App">
            <PersistentDrawerLeft/>
             <Route exact path="/" >
                <TasksList tasksList={this.state.tasksList}></TasksList>
             </Route>
             <Route path="/newtask" component={TextFields}></Route>
            <SimpleTooltips/>
          </div>
        </Router>
    );
  }
}

export default App;
