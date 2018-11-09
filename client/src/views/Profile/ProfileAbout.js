import React, { Component } from 'react';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
import Badge from 'components/Badge/Badge.jsx';
import classNames from 'classnames';
import Button from 'components/CustomButtons/Button.jsx';
import profilePage from 'assets/jss/material-kit-react/views/profilePage.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import isEmpty from '../../validation/is-empty';

import ProfileGithub from './ProfileGithub';
import Experience from './Experience';
import Education from './Education';
class ProfileAbout extends Component {
  render() {
    const { classes, ...rest } = this.props;
    const { profile } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    let socialLinks = {};
    let skills = profile.skills.map(skill => (
      <Badge color="primary">{skill}</Badge>
    ));

    if (!isEmpty(profile.social)) {
      let socialLinksArray = Object.entries(profile.social);

      socialLinks = socialLinksArray.map(([key, value]) => (
        <Button
          key={key}
          justIcon
          className={classes.margin5}
          href={value}
          simple
          color="primary"
        >
          <i className={`fab fa-${key}`} />
        </Button>
      ));
    } else {
      socialLinks = <h4>No social media links, yet</h4>;
    }

    return (
      <div>
        <Parallax small filter image={require('assets/img/profile-bg.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src={profile.user.avatar}
                        alt="..."
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{profile.user.name}</h3>
                      <h6>@{profile.handle}</h6>
                      <h6>
                        {profile.status}{' '}
                        {isEmpty(profile.company) ? null : (
                          <span>at {profile.company}</span>
                        )}
                      </h6>
                      {socialLinks}
                    </div>
                  </div>
                </GridItem>

                <GridItem
                  xs={12}
                  sm={12}
                  md={6}
                  className={classes.description}
                >
                  <div>{profile.bio}</div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <Button href="/profiles" round color="primary">
                    Back to Profiles
                  </Button>
                </GridItem>
              </GridContainer>

              <hr />
              {/* EXPERIENCE AND EDUCATION */}
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <div>{skills}</div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} lg={6}>
                    <h3 className={classes.title}>Experience</h3>
                    <Experience experience={profile.experience} />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6} lg={6}>
                    <h3 className={classes.title}>Education</h3>
                    <Education education={profile.education} />
                  </GridItem>
                </GridContainer>
              </div>

              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    {profile.githubusername ? (
                      <ProfileGithub username={profile.githubusername} />
                    ) : null}
                    <ProfileGithub username={profile.githubusername} />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(profilePage)(ProfileAbout);
