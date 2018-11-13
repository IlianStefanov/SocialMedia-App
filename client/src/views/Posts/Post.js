import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import postStyle from '../../assets/jss/material-kit-react/components/postStyle';
import { connect } from 'react-redux';
import {
  deleteComment,
  addLike,
  unLike,
  addComment
} from '../../actions/postActions';

import ReplyBox from './ReplyBox';

import PropTypes from 'prop-types';
class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmitComment = this.onSubmitComment.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  findUserLikes(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  onClick() {
    console.log(this.props.id);
  }

  componentDidMount() {
    if (this.findUserLikes(this.props.likesArray)) {
      this.setState({
        like: true
      });
    }
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  onSubmitComment(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const postId = this.props.id;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };
    // const commentValue = this.state.comment;

    this.props.addComment(postId, newComment);
    console.log(`${postId}  +  ${this.state.text}`);
    this.setState({ text: '' });
  }

  onDeleteClick() {
    this.props.deleteComment(this.props.id);
    console.log(this.props.id);
  }
  // like(id) {
  //   this.props.addLike(id);
  // }

  // unLike(id) {
  //   this.props.unLike(id);
  // }

  likeAndDislike(id) {
    if (this.findUserLikes(this.props.likesArray)) {
      this.props.unLike(id);
    } else {
      this.props.addLike(id);
    }
  }

  render() {
    const { classes } = this.props;
    const { isAuthenticated, user } = this.props.auth;

    let deletePost;

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
    // console.log(this.props.comments);

    const listReplies = this.props.comments.map((comment, i) => (
      //list all comment boxes generated from the comment form and creates a unique id for each comment box
      <ReplyBox
        key={i}
        id={comment._id}
        text={comment.text}
        avatar={comment.avatar}
        name={comment.name}
        user={comment.user}
        postId={this.props.id}
      />
    ));

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
              <span
                className={
                  this.findUserLikes(this.props.likesArray)
                    ? 'post-actions__like'
                    : 'post-actions__unlike'
                }
              >
                <button onClick={this.likeAndDislike.bind(this, this.props.id)}>
                  {this.findUserLikes(this.props.likesArray)
                    ? 'Dislike'
                    : 'Like'}
                </button>
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
                <form
                  action="submit"
                  className="comment-form"
                  onSubmit={this.onSubmitComment}
                >
                  <input
                    name="text"
                    type="text"
                    placeholder="Reply..."
                    value={this.state.text}
                    onChange={this.onChange}
                    onClick={this.onClick}
                    // ref={ref => (this.textInput = ref)}
                  />
                  <button type="submit" className="SubmitComment">
                    Submit
                  </button>
                </form>
              </div>

              <div className="list-replies">{listReplies}</div>
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
  postId: PropTypes.string.isRequired,
  auth: state.auth
});

export default withStyles(postStyle)(
  connect(
    mapStateToProps,
    { deleteComment, addLike, unLike, addComment }
  )(Post)
);
