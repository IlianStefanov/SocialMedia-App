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
import SelectListGroup from '../common/SelectListGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import ProfileHeader from '../create-profile/create-profileHeader';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EditProfile extends Component {
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
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Bring skills array
      const skillsCSV = profile.skills.join(', ');

      console.log(profile.social);
      //Check if exists
      profile.company = !isEmpty(profile.company) ? profile.company : '';
      profile.website = !isEmpty(profile.website) ? profile.website : '';
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.githubusername = !isEmpty(profile.githubusername)
        ? profile.githubusername
        : '';
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.social.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : '';
      profile.social.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : '';
      profile.social.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : '';
      profile.social.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : '';
      profile.social.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : '';

      // Set components field state
      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        githubusername: profile.githubusername,
        bio: profile.bio,
        twitter: profile.social.twitter,
        facebook: profile.social.facebook,
        linkedin: profile.social.linkedin,
        youtube: profile.social.youtube,
        instagram: profile.social.instagram
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

    let socialInputs;
    if (displaySocialInputs) {
    }

    return (
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

                        <TextAreaFieldGroup
                          placeholder="Biography"
                          name="bio"
                          value={this.state.bio}
                          onChange={this.onChange}
                          info="Give us an idea of where you are at in your career"
                        />

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
                            id="githubusername"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              name: 'githubusername',
                              type: 'text',
                              value: this.state.githubusername,
                              onChange: this.onChange,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <i className={'fab fa-github'} />
                                </InputAdornment>
                              )
                            }}
                          />
                        </div>

                        {socialInputs}
                      </GridItem>

                      <GridItem xs={12} sm={12} md={6} />

                      <GridItem xs={12} sm={12} md={6} />
                    </GridContainer>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="success" size="lg" type="submit" round>
                      Edit Profile
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

EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default withStyles(landingPageStyle)(
  connect(
    mapStateToProps,
    { createProfile, getCurrentProfile }
  )(withRouter(EditProfile))
);
