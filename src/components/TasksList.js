import React, { memo } from "react";
import { List, Paper, Grid } from "@material-ui/core";


const TasksList = ({tasksList}) => 
    <>
        <h1>Tasks</h1>
        <p>{JSON.stringify(tasksList)}</p>
    </>;



export default (TasksList);