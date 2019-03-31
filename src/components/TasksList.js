import React, { memo, Component } from "react";
import { List, Paper, Grid } from "@material-ui/core";
import TaskCard from "./TaskCard";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    lista: {
      maxHeight: 'calc(100vh - 112px)',
      overflow: 'auto'
  
    },
    
  });

class TasksList extends Component{
    constructor(props){
        super(props);
        this.state ={
            tasksList:[{description: 'Hacer lab de COSW', responsible: "Juan Gomez", state:"In Progress", date: "01/03/2019"},
            {description: 'Hacer lab de COSW', responsible: "Juan Gomez", state:"In Progress", date: "01/03/2019"},
            {description: 'Hacer lab de COSW', responsible: "Juan Gomez", state:"In Progress", date: "01/03/2019"},
            {description: 'Hacer lab de COSW', responsible: "Juan Gomez", state:"In Progress", date: "01/03/2019"},
            {description: 'Hacer lab de COSW', responsible: "Juan Gomez", state:"In Progress", date: "01/03/2019"},
            {description: 'Hacer lab de COSW', responsible: "Juan Gomez", state:"In Progress", date: "01/03/2019"},
            {description: 'Hacer lab de COSW', responsible: "Juan Gomez", state:"In Progress", date: "01/03/2019"},
            {description: 'Hacer lab de COSW', responsible: "Juan Gomez", state:"In Progress", date: "01/03/2019"},
            {description: 'Hacer lab de COSW', responsible: "Juan Gomez", state:"In Progress", date: "01/03/2019"}],
          };
        
    }
    componentDidMount() {
        fetch('http://localhost:8080/taskslist')
            .then(
                
                response => response.json()
                )
            .then(data => {
                
                let tasksList = [{description: 'Hacer lab de COSW', responsible: "Juan Gomez", state:"In Progress", date: "01/03/2019"}];
                data.forEach(function (task) {
                    tasksList.push(task)
                    console.log(task);

                });
                this.setState({tasksList: tasksList});
            });
    }
    render() {
    const { classes } = this.props;
    return (
        <div className= {classes.lista}>
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
        </div>
    )}
}



export default withStyles(styles)(TasksList);