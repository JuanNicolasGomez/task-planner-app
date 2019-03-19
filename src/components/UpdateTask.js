import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link}  from "react-router-dom";

const styles = theme => ({
  container: {
    
    flexWrap: 'wrap',

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'ready',
    label: 'Ready',
  },
  {
    value: 'progress',
    label: 'In Progress',
  },
  {
    value: 'done',
    label: 'Done',
  },
];

class UpdateTask extends React.Component {
  constructor(props){
          super(props);

          this.handleSubmit = this.handleSubmit.bind(this);
      }

  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'ready',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit(e){
    console.log("handleeeee");
      e.preventDefault();
      var parse = JSON.parse(localStorage.tasks);
      parse.push(this.state);
      localStorage.tasks = JSON.stringify(parse);
      window.alert("Task Added succesfully");
  }

  render() {
    const { classes } = this.props;

    return (
        <>
        <h1>Update Task</h1>
        <Paper className={classes.container} >
            
            <TextField
            id="standard-name"
            label="Name"
            fullWidth
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            placeholder="Juan Gomez"
            />
            <TextField
            id="standard-select-currency"
            select
            label="Select"
            fullWidth
            className={classes.textField}
            value={this.state.currency}
            onChange={this.handleChange('currency')}
            SelectProps={{
                MenuProps: {
                className: classes.menu,
                },
            }}
            helperText="Please select the task status"
            margin="normal"
            placeholder = "blablabla Test1"
            >
            {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
            
            <TextField
            id="standard-full-width"
            label="Description"
            style={{ margin: 8 }}
            placeholder="Please enter a description"
            fullWidth
            margin="normal"
            placeholder = "Description Test1"
            InputLabelProps={{
                shrink: true,
            }}
            />

            <Button type="submit"
            fullWidth
            color="primary"
            className="submit"> Submit</Button>

            <Link to="/">
                <Button type="submit"
                        fullWidth
                        color="primary"
                        className="submit"> Back
                </Button>
            </Link>

        </Paper>
      </>
    );
  }
}
 UpdateTask.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (UpdateTask);