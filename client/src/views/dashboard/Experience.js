import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import boxStyles from '../../assets/jss/material-kit-react/views/componentsSections/boxStyles';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';
class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }
  render() {
    const { classes } = this.props;
    const experience = this.props.experience.map(exp => (
      <div key={exp.id} className={classes.box}>
        <a
          key={exp.id}
          className={classes.close}
          onClick={this.onDeleteClick.bind(this, exp._id)}
        >
          X
        </a>
        <h4>{exp.title}</h4>
        <h5>{exp.company}</h5>
        <Moment format="DD/MM/YYYY">{exp.from}</Moment> -
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format="DD/MM/YYYY">{exp.to}</Moment>
        )}
        <p>{exp.description}</p>
        <p>{exp.location}</p>
      </div>
    ));
    return <div>{experience}</div>;
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default withStyles(boxStyles)(
  connect(
    null,
    { deleteExperience }
  )(Experience)
);
