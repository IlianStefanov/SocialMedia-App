import React from 'react';
import { Link } from 'react-router-dom';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';

const ProfileActions = () => {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Link to="/edit-profile">
          <Button round color="info">
            <i class="fas fa-edit" />
            <span>Edit Profile</span>
          </Button>
        </Link>

        <Link to="/add-experience">
          <Button round color="info">
            <i class="fas fa-plus-circle" />
            <span>Add Experience</span>
          </Button>
        </Link>

        <Link to="/add-education">
          <Button round color="info">
            <i class="fas fa-plus-circle" />
            <span>Add Education</span>
          </Button>
        </Link>
      </GridItem>
    </GridContainer>
  );
};

export default ProfileActions;
