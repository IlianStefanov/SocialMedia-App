import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import Spinner from '../common/Spinner';

import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import PropTypes from 'prop-types';
import CardFooter from 'components/Card/CardFooter.jsx';

import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
import { getPosts } from '../../actions/postActions';
import Post from './Post';
import classNames from 'classnames';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { classes } = this.props;
    const { posts, loading } = this.props.post;

    let displayAllPosts;

    if (posts === null || loading) {
      displayAllPosts = <Spinner />;
    } else {
      displayAllPosts = posts.map(post => (
        // <GridItem xs={12} sm={12} md={12} lg={12}>
        <Post
          id={post._id}
          name={post.name}
          avatar={post.avatar}
          text={post.text}
          user={post.user}
          likes={post.likes.length}
        />
        // </GridItem>
      ));
    }

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

        <div className={classNames(classes.main)}>
          <div>
            <div className={classes.container}>{displayAllPosts}</div>
          </div>
        </div>

        {/* <div className={classNames(classes.main)}>
          <div className={classes.container}></div>
        </div> */}
      </div>
    );
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default withStyles(landingPageStyle)(
  connect(
    mapStateToProps,
    { getPosts }
  )(Posts)
);
