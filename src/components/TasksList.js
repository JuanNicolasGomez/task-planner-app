import React, { memo } from "react";
import { List, Paper, Grid } from "@material-ui/core";
import TaskCard from "./TaskCard";


const TasksList = ({tasksList}) => 
    <>
        <h1>Tasks</h1>
        {tasksList.map((value,i)=>{
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



export default (TasksList);