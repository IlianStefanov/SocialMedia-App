import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile,  } from '../../actions/profileActions';
import unsplash from '../../api/unsplash';
// @material-ui/core components

// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import NavPills from 'components/NavPills/NavPills.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
import ProfileActions from './ProfileActions';
import profile from 'assets/img/faces/christian.jpg';
import isEmpty from '../../validation/is-empty';
import Experience from './Experience';
import Education from './Education';
import studio1 from 'assets/img/examples/studio-1.jpg';
import studio2 from 'assets/img/examples/studio-2.jpg';
import studio3 from 'assets/img/examples/studio-3.jpg';
import studio4 from 'assets/img/examples/studio-4.jpg';
import studio5 from 'assets/img/examples/studio-5.jpg';
import work1 from 'assets/img/examples/olu-eletu.jpg';
import work2 from 'assets/img/examples/clem-onojeghuo.jpg';
import work3 from 'assets/img/examples/cynthia-del-rio.jpg';
import work4 from 'assets/img/examples/mariya-georgieva.jpg';
import work5 from 'assets/img/examples/clem-onojegaw.jpg';
import CustomTabs from 'components/CustomTabs/CustomTabs.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import profilePage from 'assets/jss/material-kit-react/views/profilePage.jsx';
import Searchbar from '../Searchbar/Searchbar';
import ImageList from '../Searchbar/ImageList';
import ProfileGithub from '../Profile/ProfileGithub';

class ProfilePage extends React.Component {
  
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
        params: { query: term }, 
        
    })


    console.log(response.data.results);
    this.setState({ images: response.data.results });
  }


  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { classes, ...rest } = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    let socialLinks = {};

    if (!isEmpty(profile.social)) {
      let socialLinksArray = Object.entries(profile.social);
      console.log(socialLinksArray);

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
      socialLinks = <p>No social links yet</p>;
    }

    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
                        src={user.avatar}
                        alt="..."
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{user.name}</h3>
                      <h6>@{profile.handle}</h6>
                      {socialLinks}
                      {/* <Button justIcon link className={classes.margin5}>
                        <i className={'fab fa-twitter'} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={'fab fa-instagram'} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={'fab fa-facebook'} />
                      </Button> */}
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
              <hr />
              <div>
                <ProfileActions />
              </div>
              <hr />
              {/* EXPERIENCE AND EDUCATION */}
              <div className={classes.container}>
                <GridContainer>
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

              {/* <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: 'Studio',
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: 'Work',
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: 'Favorite',
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer> */}

              <ProfileGithub username={profile.githubusername} />
              <div>
              
<hr />

<Searchbar onSubmit={this.onSearchSubmit}/>
Found: {this.state.images.length} images
<ImageList searchResults={this.state.images} />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default withStyles(profilePage)(
  connect(
    mapStateToProps,
    { getCurrentProfile }
  )(ProfilePage)
);
