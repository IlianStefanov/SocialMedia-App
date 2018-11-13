import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// var profilePicture = require('../images/comment_author.png');
import { deleteReply } from '../../actions/postActions';

class ReplyBox extends React.Component {
  onDeleteClick() {
    // this.props.deleteReply(this.props.id);
    console.log(this.props.user);

    this.props.deleteReply(this.props.postId, this.props.id);
  }
  render() {
    const { user } = this.props.auth;
    const { postId } = this.props;

    let deletePost;
    if (user.id === this.props.user) {
      deletePost = (
        <button
          className="deletePostBtn"
          onClick={this.onDeleteClick.bind(this, postId, this.props.id)}
        >
          X
        </button>
      );
    } else {
      deletePost = null;
    }
    return (
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
                {/* <span className="timing"><a href="javascript:;">{this.props.date}</a></span> */}
                <span className="location">
                  <a href="javascript:;" />
                </span>
              </div>
            </div>
            <div className="clear" />
          </div>

          {/* Post */}
          <p className="post-content">{this.props.text}</p>

          {/* <div className="post-actions">
            <span className="post-actions__like">
              <a href="javascript:;">LIKE</a>
            </span>
            <span className="post-actions__share">
              <a href="javascript:;">SHARE</a>
            </span>
          </div> */}
        </div>
      </div>
    );
  }
}
ReplyBox.propTypes = {
  text: PropTypes.string
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteReply }
)(ReplyBox);
