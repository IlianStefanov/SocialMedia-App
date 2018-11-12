import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import postStyle from '../../assets/jss/material-kit-react/components/postStyle';
import { connect } from 'react-redux';
import { deleteComment, addLike, unLike } from '../../actions/postActions';

import PropTypes from 'prop-types';
class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: false
    };
  }

  onDeleteClick() {
    this.props.deleteComment(this.props.id);
    console.log(this.props.id);
  }
  like() {
    // if (like) {
    //   this.props.addLike();
    // } else {
    //   this.props.unLike();
    // }

    this.props.addLike(this.props.id);
  }

  render() {
    const { classes } = this.props;
    const { isAuthenticated, user } = this.props.auth;

    let deletePost;

    // deleteComment() {
    //   this.this.props.deleteComment();
    // }

    if (isAuthenticated && user.id === this.props.user) {
      deletePost = (
        <button
          className="deletePostBtn"
          onClick={this.onDeleteClick.bind(this, this.props.id)}
        >
          X
        </button>
      );
    } else {
      deletePost = null;
    }
    return (
      <div className={classes.commentContainer + ' ' + classes.container}>
        {/* <div className={classes.commentInfo}>
          <img
            src={this.props.avatar}
            alt={this.props.name}
            className={classes.commentImg}
          />
          <p>{this.props.name}</p>
        </div>
        <div className={classes.textWrapper}>
          <p>{this.props.text}</p>
        </div> */}

        <div className="post-outer-container">
          <div className="post-container">
            <div className="post-details">
              <img src={this.props.avatar} alt="" className="user-image" />

              {deletePost}
              <div className="user-container">
                <h3 className="user-container__user">
                  <a href="javascript:;">{this.props.name}</a>
                </h3>
                <div className="user-container__details">
                  <span className="timing">
                    <a href="javascript:;" />
                  </span>

                  <span className="location">
                    <a href="javascript:;" />
                  </span>
                </div>
              </div>
              <div className="clear" />
            </div>

            <p className="post-content">{this.props.text}</p>

            <div className="post-actions">
              <span className="post-actions__like">
                <button onClick={this.like.bind(this)}>LIKE</button>
              </span>

              <span className="post-actions__share">
                <a href="javascript:;">SHARE</a>
              </span>

              <span className="post-actions__comment">
                <a href="javascript:;">COMMENT</a>
              </span>
              <span className="post-actions__report">
                {/* <a href="javascript:;">Report</a> */}
                <span className="Likes"> {this.props.likes} likes</span>
              </span>
            </div>

            <div className="reply">
              <div className="reply-actions__like">
                <a href="javascript:;">COMMENT</a>
              </div>
              <div className="reply-actions__comment">
                <a href="javascript:;">PHOTO</a>
              </div>
              <div className="reply-actions__share">
                <a href="javascript:;">FEEDBACK</a>
              </div>
              <div className="CommentInput">
                <form action="submit" className="comment-form">
                  <input
                    type="text"
                    placeholder="Reply..."
                    // ref={ref => (this.textInput = ref)}
                  />
                </form>
              </div>

              {/* <div className="list-replies">{listReplies}</div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deleteComment: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  unLike: PropTypes.func.isRequired,
  auth: state.auth
});

export default withStyles(postStyle)(
  connect(
    mapStateToProps,
    { deleteComment, addLike, unLike }
  )(Post)
);
