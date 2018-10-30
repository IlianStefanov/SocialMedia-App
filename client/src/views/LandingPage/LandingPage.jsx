import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Button from 'components/CustomButtons/Button.jsx';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
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
        <Button size="lg" color="primary" round href="login">
          {/* <i className="fas fa-play" /> With Icon */}
          Login
        </Button>

        <Button size="lg" color="noColor" round href="register">
          {/* <i className="fas fa-play" /> With Icon */}
          Register
        </Button>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
