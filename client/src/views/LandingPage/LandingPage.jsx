import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
// @material-ui/icons
import Button from 'components/CustomButtons/Button.jsx';
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
const dashboardRoutes = [];

class LandingPage extends React.Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <Parallax filter image={require('assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>Welcome to the Dev connector.</h4>
                <br />
                {/* <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Watch video
                </Button> */}
                {/* <Button size="lg" color="primary" round href="login">
                  
                  Login
                </Button> */}

                <Button size="lg" color="primary" round href="register">
                  {/* <i className="fas fa-play" /> With Icon */}
                  Register
                </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    );
  }
}

LandingPage.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withStyles(landingPageStyle)(
  connect(mapStateToProps)(LandingPage)
);
