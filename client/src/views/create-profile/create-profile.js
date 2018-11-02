import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import InputAdornment from '@material-ui/core/InputAdornment';
// core components
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';

import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
class CreateProfile extends Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',

      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      company: '',
      website: '',
      handle: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    };
  }
  render() {
    const { classes, ...rest } = this.props;
    const { errors } = this.state;
    return (
      //   <div className={classNames(classes.main, classes.mainRaised)}>
      //   <div className={classes.container}>
      <Card className={classes[this.state.cardAnimaton]}>
        <form className={classes.form} onSubmit={this.onSubmit}>
          {/* <CardHeader color="primary" className={classes.cardHeader}>
                <h3>Register</h3> */}

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
          {/* </CardHeader> */}
          {/* <p className={classes.divider}>Or Be Classical</p> */}
          <CardBody>
            <h3>Create Profile</h3>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={errors.name ? errors.name.toString() : 'User name'}
                  id="userName"
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
                  labelText={
                    errors.email ? errors.email.toString() : 'Status...'
                  }
                  id="status"
                  formControlProps={{
                    fullWidth: true
                  }}
                  error={errors.email ? true : ''}
                  inputProps={{
                    type: 'text',
                    value: this.state.email,
                    onChange: this.onChange,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={'Website...'}
                  id="website"
                  formControlProps={{
                    fullWidth: true
                  }}
                  error={errors.password ? true : ''}
                  inputProps={{
                    type: 'text',
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
              </GridItem>
              {/* <hr /> */}
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText={'Facebook profile...'}
                  id="facebook"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: 'text',
                    value: this.state.password2,
                    onChange: this.onChange,
                    startAdornment: (
                      <InputAdornment position="start">
                        <i className={'fab fa-facebook'} />
                      </InputAdornment>
                    )
                  }}
                />

                <CustomInput
                  labelText={'Instagram profile...'}
                  id="instagram"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: 'text',
                    value: this.state.password2,
                    onChange: this.onChange,
                    startAdornment: (
                      <InputAdornment position="start">
                        <i className={'fab fa-instagram'} />
                      </InputAdornment>
                    )
                  }}
                />

                <CustomInput
                  labelText={'Twitter profile...'}
                  id="twitter"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: 'text',
                    value: this.state.password2,
                    onChange: this.onChange,
                    startAdornment: (
                      <InputAdornment position="start">
                        <i className={'fab fa-twitter'} />
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter className={classes.cardFooter}>
            <Button color="success" size="lg" type="submit" round>
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
      //   </div>
      //   </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default withStyles(landingPageStyle)(
  connect(mapStateToProps)(CreateProfile)
);
