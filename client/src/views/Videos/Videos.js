import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getAllProfiles } from '../../actions/profileActions';
import youtube from '../../api/youtube';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import profiles from '../../assets/jss/material-kit-react/views/profiles';
import Searchbar from '../Searchbar/Searchbar';

var background = require('../../assets/img/rawpixel-558599-unsplash.jpg');
class Videos extends Component {
  componentDidMount() {
    this.props.getAllProfiles();
  }


  onSearchSubmit = async (term) => {
      console.log(term);

      const search = await youtube.get('/search', {
         params: {
           q: term
         }
      }).then(response => { 
        console.log(response)
      })
      .catch(error => {
          console.log(error.response)
      });;

      console.log(search);

  }
  render() {
    const { profiles, loading } = this.props.profile;
    const { classes } = this.props;
    let profileItems;

    // if (profiles === null || loading) {
    //   profileItems = <Spinner />;
    // } else {
    //   if (profiles.length > 0) {
    //     profileItems = profiles.map(profile => (
    //       <GridItem
    //         xs={12}
    //         sm={8}
    //         md={4}
    //         lg={4}
    //         className={classes.singleProfile}
    //       >
    //         <ProfileItem key={profile._id} profile={profile} />
    //       </GridItem>
    //     ));
    //   } else {
    //     profileItems = <h1>No Profiles Here</h1>;
    //   }
    // }
    return (
      <div
        className={classes.background}
        style={{
          background: `url("${background}") center center fixed / cover`
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
         

          <Searchbar  onSubmit={this.onSearchSubmit} />
          {profileItems}
          </GridContainer>
        </div>

        

      </div>
    );
  }
}

Videos.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default withStyles(profiles)(
  connect(
    mapStateToProps,
    { getAllProfiles }
  )(Videos)
);
