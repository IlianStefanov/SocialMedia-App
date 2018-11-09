import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import Spinner from '../common/Spinner';

import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';

import CardFooter from 'components/Card/CardFooter.jsx';

import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
class Post extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax filter image={require('assets/img/landing-bg.jpg')}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <Card>
                  <PostForm />
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
    );
  }
}
export default withStyles(landingPageStyle)(Post);
