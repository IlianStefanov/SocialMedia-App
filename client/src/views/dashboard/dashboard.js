import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
import Spinner from '../common/Spinner';
import { Link } from 'react-router-dom';
import Button from 'components/CustomButtons/Button.jsx';
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import ProfilePage from './ProfilePage';
class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { classes, ...rest } = this.props;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if Logged in user have profile
      if (Object.keys(profile).length > 0) {
        dashboardContent = <ProfilePage />;
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <Parallax filter image={require('assets/img/landing-bg.jpg')}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div>
                    <p>Welcome {user.name}</p>
                    <p>You have not yet set up a profile info</p>
                    <Link to="/create-profile">
                      <Button color="success" size="lg" type="submit" round>
                        Create Profile
                      </Button>
                    </Link>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        );
      }
      // dashboardContent = <h1>Dashboard</h1>;
    }
    return <div>{dashboardContent}</div>;
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default withStyles(landingPageStyle)(
  connect(
    mapStateToProps,
    { getCurrentProfile }
  )(Dashboard)
);
