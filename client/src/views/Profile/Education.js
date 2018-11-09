import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import boxStyles from '../../assets/jss/material-kit-react/views/componentsSections/boxStyles';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';
class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const { classes } = this.props;
    const education = this.props.education.map(edu => (
      <div key={edu.id} className={classes.box}>
        <h4>{edu.school}</h4>
        <h5>{edu.degree}</h5>
        <p>{edu.fieldofstudy}</p>
        <Moment format="DD/MM/YYYY">{edu.from}</Moment>
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format="DD/MM/YYYY">{edu.to}</Moment>
        )}

        <p>{edu.description}</p>
      </div>
    ));
    return <div>{education}</div>;
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default withStyles(boxStyles)(
  connect(
    null,
    { deleteEducation }
  )(Education)
);
