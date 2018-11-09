import React, { Component } from 'react';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import withStyles from '@material-ui/core/styles/withStyles';
import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from 'components/CustomButtons/Button.jsx';

import CardBody from 'components/Card/CardBody.jsx';

import CardFooter from 'components/Card/CardFooter.jsx';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const newPost = {
      text: this.state.text,
      name: user.name,
      acatar: user.avatar
    };

    this.props.addPost(newPost);

    this.setState({
      text: ''
    });
  }
  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <div>
        <CardBody>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <TextAreaFieldGroup
              placeholder={
                errors.text
                  ? 'If you want to make post... there must be something on your mind'
                  : "What's on your mind"
              }
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              info="Give us an idea of where you are at in your career"
            />

            <CardFooter className={classes.cardFooter}>
              <Button color="success" size="lg" type="submit" round>
                Post
              </Button>
            </CardFooter>
          </form>
        </CardBody>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default withStyles(loginPageStyle)(
  connect(
    mapStateToProps,
    { addPost }
  )(withRouter(PostForm))
);
