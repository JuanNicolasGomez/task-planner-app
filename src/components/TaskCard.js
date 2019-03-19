import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import {CardContent} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {Link}  from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


function update(){
    return(
        window.location.assign('/updatetask')
    );
}

const styles = {
    card: {
      minWidth: 275,
      marginBottom: 25,
      

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
  };

  
function TaskCard (props){

    const { classes } = props;
    return(
    <div style= {styles.card}>
        <Card >
            <CardActionArea  component={Link} to={{pathname: '/updatetask', state:{
                    description : props.description,
                    status : props.state,
                    responsible : props.responsible,
                    dueDate : props.date
                }}}>
                <CardContent>
                    <Typography variant="h5">
                        {props.description}
                    </Typography>
                    <Typography color="textSecondary">
                        {props.state}State:{props.status}
                    </Typography>
                    <Typography color="textSecondary">
                        {props.state}Due Date:{props.date}
                    </Typography>
                    <Typography color="textSecondary">
                        Responsible: {props.responsible}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    );
    
}



export default withStyles(styles)(TaskCard);