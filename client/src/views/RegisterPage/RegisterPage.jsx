import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
// core components

import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';

import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx';

import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',
      name: '',
      email: '',
      password: '',
      password2: '',
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
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: '' });
      }.bind(this),
      10
    );
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { classes, ...rest } = this.props;
    const { errors } = this.state;
    // console.log(errors);

    return (
      <div className={classes.container}>
        <Card className={classes[this.state.cardAnimaton]}>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h3>Register</h3>

              {/* <div className={classes.socialLine}>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={'fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={'fab fa-facebook'} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={'fab fa-google-plus-g'} />
                </Button>
              </div> */}
            </CardHeader>
            {/* <p className={classes.divider}>Or Be Classical</p> */}
            <CardBody>
              <CustomInput
                labelText={
                  errors.name ? errors.name.toString() : 'First Name...'
                }
                id="name"
                // {...(errors.name ? error : {})}
                formControlProps={{
                  fullWidth: true
                }}
                error={errors.name ? true : ''}
                // labelProps={error}
                inputProps={{
                  name: 'name',
                  type: 'text',
                  value: this.state.name,
                  onChange: this.onChange,
                  endAdornment: (
                    <InputAdornment position="end">
                      <People className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />

              <CustomInput
                labelText={errors.email ? errors.email.toString() : 'Email...'}
                id="email"
                formControlProps={{
                  fullWidth: true
                }}
                error={errors.email ? true : ''}
                inputProps={{
                  type: 'email',
                  value: this.state.email,
                  onChange: this.onChange,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />
              <CustomInput
                labelText={
                  errors.password ? errors.password.toString() : 'Password...'
                }
                id="password"
                formControlProps={{
                  fullWidth: true
                }}
                error={errors.password ? true : ''}
                inputProps={{
                  type: 'password',
                  value: this.state.password,
                  onChange: this.onChange,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className={classes.inputIconsColor}>
                        lock_outline
                      </Icon>
                    </InputAdornment>
                  )
                }}
              />

              <CustomInput
                labelText={
                  errors.password2
                    ? errors.password2.toString()
                    : 'Confirm Password...'
                }
                id="password2"
                formControlProps={{
                  fullWidth: true
                }}
                error={errors.password2 ? true : ''}
                inputProps={{
                  type: 'password',
                  value: this.state.password2,
                  onChange: this.onChange,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className={classes.inputIconsColor}>
                        lock_outline
                      </Icon>
                    </InputAdornment>
                  )
                }}
              />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button color="success" size="lg" type="submit" round>
                Register
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

RegisterPage.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default withStyles(loginPageStyle)(
  connect(
    mapStateToProps,
    { registerUser }
  )(RegisterPage)
);
