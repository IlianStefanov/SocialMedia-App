import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileByHandle } from '../../actions/profileActions';
// @material-ui/core components

// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import NavPills from 'components/NavPills/NavPills.jsx';

// import ProfileActions from './ProfileActions';
import profile from 'assets/img/faces/christian.jpg';
import isEmpty from '../../validation/is-empty';
// import Experience from './Experience';
// import Education from './Education';

import ProfileAbout from './ProfileAbout';

import Spinner from '../common/Spinner';

import profilePage from 'assets/jss/material-kit-react/views/profilePage.jsx';
import withStyles from '@material-ui/core/styles/withStyles';

class ProfileView extends React.Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }
  render() {
    // const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <ProfileAbout profile={profile} />
        </div>
      );
    }
    const { classes, ...rest } = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    let socialLinks = {};

    // if (!isEmpty(profile.social)) {
    //   let socialLinksArray = Object.entries(profile.social);

    //   socialLinks = socialLinksArray.map(([key, value]) => (
    //     <Button
    //       key={key}
    //       justIcon
    //       className={classes.margin5}
    //       href={value}
    //       simple
    //       color="primary"
    //     >
    //       <i className={`fab fa-${key}`} />
    //     </Button>
    //   ));
    // } else {
    //   socialLinks = <h1>Add social links</h1>;
    // }

    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return <div>{profileContent}</div>;
  }
}

ProfileView.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default withStyles(profilePage)(
  connect(
    mapStateToProps,
    { getProfileByHandle }
  )(ProfileView)
);
