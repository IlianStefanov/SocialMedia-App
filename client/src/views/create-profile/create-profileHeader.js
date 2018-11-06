import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';

import InputAdornment from '@material-ui/core/InputAdornment';
// core components
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';

import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';

import teamStyle from '../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx';

import team1 from '../../assets/img/faces/avatar.jpg';
import team2 from '../../assets/img/faces/christian.jpg';
import team3 from '../../assets/img/faces/kendall.jpg';

class CreateProfileHeader extends Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',

      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      company: '',
      website: '',
      handle: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    };
  }
  render() {
    const { classes, ...rest } = this.props;
    const { errors, isAuthenticated, user } = this.props.auth;
    // const imageClasses = classNames(
    //   classes.imgRaised,
    //   classes.imgRoundedCircle,
    //   classes.imgFluid
    // );
    return (
      //   <div className={classNames(classes.main, classes.mainRaised)}>
      //   <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} className="AlignLeft">
          <h1>Welcome {user.name} </h1>
          <h4>
            Feel free to create and update your profile by submiting the fileds
            below!
          </h4>
        </GridItem>

        <GridItem xs={12} sm={12} md={6} className="AlignRight">
          <img
            src={user.avatar}
            alt="..."
            className={classes.imgRoundedCircle + ' ' + classes.imgFluid}
          />
        </GridItem>
      </GridContainer>
      //   </div>
    );
  }
}

CreateProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
  auth: state.auth
});

export default withStyles(teamStyle)(
  connect(mapStateToProps)(CreateProfileHeader)
);
