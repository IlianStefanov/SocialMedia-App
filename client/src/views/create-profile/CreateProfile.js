import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
import Icon from '@material-ui/core/Icon';
import { withRouter } from 'react-router-dom';
// import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobeAmericas,
  faBuilding,
  faCog,
  faListUl,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons';
// core components
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import Parallax from '../../components/Parallax/Parallax';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';

import ProfileHeader from './create-profileHeader';
import { createProfile } from '../../actions/profileActions';

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

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Lifecycle methods
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  clickLinkHandle = () => {
    this.setState({
      displaySocialInputs: !this.state.displaySocialInputs
    });
  };

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { classes, ...rest } = this.props;
    const { errors, displaySocialInputs } = this.state;

    // const options = [
    //   { label: 'None', value: '' },
    //   { label: 'Developer', value: 'Developer' },
    //   { label: 'Junior Developer', value: 'Junior Developer' },
    //   { label: 'Senior Developer', value: 'Senior Developer' },
    //   { label: 'Manager', value: 'Manager' },
    //   { label: 'Student or learning', value: 'Student or learning' },
    //   { label: 'Intern', value: 'Intern' },
    //   { label: 'Other', value: 'Other' }
    // ];

    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <CustomInput
            labelText={'Facebook profile...'}
            id="facebook"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              name: 'facebook',
              type: 'text',
              value: this.state.facebook,
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
              name: 'instagram',
              type: 'text',
              value: this.state.instagram,
              onChange: this.onChange,
              startAdornment: (
                <InputAdornment position="start">
                  <i className={'fab fa-instagram'} />
                </InputAdornment>
              )
            }}
          />

          <CustomInput
            labelText={'LinkedIn profile...'}
            id="linkedin"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              name: 'linkedin',
              type: 'text',
              value: this.state.linkedin,
              onChange: this.onChange,
              startAdornment: (
                <InputAdornment position="start">
                  <i className={'fab fa-linkedin'} />
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
              name: 'twitter',
              type: 'text',
              value: this.state.twitter,
              onChange: this.onChange,
              startAdornment: (
                <InputAdornment position="start">
                  <i className={'fab fa-twitter'} />
                </InputAdornment>
              )
            }}
          />

          <CustomInput
            labelText={'GitHub profile...'}
            id="github"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              name: 'github',
              type: 'text',
              value: this.state.github,
              onChange: this.onChange,
              startAdornment: (
                <InputAdornment position="start">
                  <i className={'fab fa-github'} />
                </InputAdornment>
              )
            }}
          />
        </div>
      );
    }

    return (
      //   <div className={classNames(classes.main, classes.mainRaised)}>
      //   <div className={classes.container}>
      <div>
        <Parallax filter image={require('assets/img/landing-bg.jpg')}>
          <div className={classes.container}>
            <ProfileHeader />
          </div>
        </Parallax>

        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
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
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8}>
                        <CustomInput
                          labelText="User name"
                          id="name"
                          // {...(errors.name ? error : {})}
                          formControlProps={{
                            fullWidth: true
                          }}
                          error={errors.handle ? true : ''}
                          // labelProps={error}
                          inputProps={{
                            name: 'handle',
                            type: 'text',
                            value: this.state.handle,
                            onChange: this.onChange,
                            // error: errors.handle,
                            info: '',
                            startAdornment: (
                              <InputAdornment position="start">
                                <People />
                              </InputAdornment>
                            )
                          }}
                        />

                        <CustomInput
                          labelText="Status"
                          id="status"
                          // {...(errors.name ? error : {})}
                          formControlProps={{
                            fullWidth: true
                          }}
                          error={errors.status ? true : ''}
                          // labelProps={error}
                          inputProps={{
                            name: 'status',
                            type: 'text',
                            value: this.state.status,
                            onChange: this.onChange,
                            // error: errors.handle,
                            info: '',
                            startAdornment: (
                              <InputAdornment position="start">
                                <FontAwesomeIcon icon={faChalkboardTeacher} />
                              </InputAdornment>
                            )
                          }}
                        />

                        <CustomInput
                          labelText={
                            errors.company
                              ? errors.company.toString()
                              : 'Company'
                          }
                          id="company"
                          // {...(errors.name ? error : {})}
                          formControlProps={{
                            fullWidth: true
                          }}
                          error={errors.company ? true : ''}
                          // labelProps={error}
                          inputProps={{
                            name: 'company',
                            type: 'text',
                            value: this.state.company,
                            onChange: this.onChange,
                            // error: errors.handle,
                            info: '',
                            startAdornment: (
                              <InputAdornment position="start">
                                <FontAwesomeIcon icon={faBuilding} />
                              </InputAdornment>
                            )
                          }}
                        />

                        <CustomInput
                          labelText={'Skills'}
                          id="skills"
                          formControlProps={{
                            fullWidth: true
                          }}
                          error={errors.skills ? true : ''}
                          inputProps={{
                            name: 'skills',
                            type: 'text',
                            value: this.state.skills,
                            onChange: this.onChange,
                            startAdornment: (
                              <InputAdornment position="start">
                                <FontAwesomeIcon icon={faListUl} />
                              </InputAdornment>
                            )
                          }}
                        />
                        {/* <CustomInput
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
                /> */}

                        <CustomInput
                          labelText={'Website...'}
                          id="website"
                          formControlProps={{
                            fullWidth: true
                          }}
                          error={errors.website ? true : ''}
                          inputProps={{
                            name: 'website',
                            type: 'text',
                            value: this.state.website,
                            onChange: this.onChange,
                            startAdornment: (
                              <InputAdornment position="start">
                                <FontAwesomeIcon icon={faGlobeAmericas} />
                              </InputAdornment>
                            )
                          }}
                        />

                        {/* <CustomInput
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
                /> */}

                        <TextAreaFieldGroup
                          placeholder="Biography"
                          name="bio"
                          value={this.state.bio}
                          onChange={this.onChange}
                          info="Give us an idea of where you are at in your career"
                        />

                        {/* SOCIAL MEDIA LINKS */}

                        <Button
                          color="success"
                          size="sm"
                          type="button"
                          round
                          justIcon
                          onClick={this.clickLinkHandle}
                        >
                          <i className={'fas fa-plus'} />
                        </Button>

                        {/* <Button color="success" round>
                  <i className={'fas fa-plus'} /> <span> </span> Show Social
                  Links
                </Button> */}

                        {socialInputs}
                      </GridItem>
                      {/* <hr /> */}
                      <GridItem xs={12} sm={12} md={6} />

                      <GridItem xs={12} sm={12} md={6} />
                    </GridContainer>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="success" size="lg" type="submit" round>
                      Create Profile
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
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
  connect(
    mapStateToProps,
    { createProfile }
  )(withRouter(CreateProfile))
);
