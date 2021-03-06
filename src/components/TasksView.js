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
    display: 'flex',
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

class TextFields extends React.Component {
  constructor(props){
          super(props);

          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleInputChange = this.handleInputChange.bind(this);
      }

  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'ready',
    file: null,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleInputChange(e) {
    this.setState({
        file: e.target.files[0]
    });                
  };

  handleSubmit(e){
        let data = new FormData();
        data.append('file', this.state.file);

        this.axios.post('files', data)
            .then(function (response) {
                console.log("file uploaded!", data);
        })
        .catch(function (error) {
            console.log("failed file upload", error);
        });
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
      <Paper className={classes.container}>
        <TextField
          id="standard-name"
          label="Name"
          fullWidth
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
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
          InputLabelProps={{
            shrink: true,
          }}
        />
        <input type="file" id="file" onChange={this.handleInputChange}/>

        <Button type="submit"
        fullWidth
        color="primary"
        className="submit" onClick={this.handleSubmit}> Submit</Button>

        <Link to="/">
            <Button type="submit"
                    fullWidth
                    color="primary"
                    className="submit" > Back
            </Button>
        </Link>

      </Paper>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
