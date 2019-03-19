import React, { memo, Component } from "react";
import { List, Paper, Grid } from "@material-ui/core";
import TaskCard from "./TaskCard";



class TasksList extends Component{
    constructor(props){
        super(props);
        this.state ={
            tasksList:[],
          };
        
    }
    componentDidMount() {
        fetch('http://localhost:8080/taskslist')
            .then(
                
                response => response.json()
                )
            .then(data => {
                
                let tasksList = [];
                data.forEach(function (task) {
                    tasksList.push(task)

                });
                this.setState({tasksList: tasksList});
            });
    }
    render() {
    return (
        <>
            <h1>Tasks</h1>
            {this.state.tasksList.map((value,i)=>{
                    return(

                        <TaskCard key={i} description={value.description}
                        responsible={value.responsible}
                        dueDate={value.date}
                        status={value.state}
                        id={value.id}/>
                    )
                })
            }
        </>
    )}
}



export default (TasksList);