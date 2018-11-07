import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import boxStyles from '../../assets/jss/material-kit-react/views/componentsSections/boxStyles';
class Experience extends Component {
  render() {
    const { classes } = this.props;
    const experience = this.props.experience.map(exp => (
      <div key={exp.id} className={classes.box}>
        <h4>{exp.title}</h4>
        <h5>{exp.company}</h5>
        <p>{exp.from}</p>
        <p>{exp.to}</p>
        <p>{exp.description}</p>
        <button>X</button>
      </div>
    ));
    return <div>{experience}</div>;
  }
}

Experience.propTypes = {};

export default withStyles(boxStyles)(connect(null)(withRouter(Experience)));
