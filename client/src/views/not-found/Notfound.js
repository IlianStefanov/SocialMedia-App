import React from 'react';
import Button from 'components/CustomButtons/Button.jsx';
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';

class Notfound extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Parallax filter image={require('assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div>
                <h1>Page not found</h1>
                <p>This page doesn't exist</p>

                <Link to="/profiles">
                  <Button color="success" size="lg" type="button" round>
                    Navigate back to profiles
                  </Button>
                </Link>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    );
  }
}

export default withStyles(landingPageStyle)(Notfound);
