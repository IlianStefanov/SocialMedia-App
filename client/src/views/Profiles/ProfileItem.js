import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardStyle from '../../assets/jss/material-kit-react/components/cardStyle';

class ProfileItem extends Component {
  render() {
    const { profile, classes } = this.props;

    return (
      <div>
        <Card className={classes.cardProfiles}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={profile.user.avatar}
              title="Contemplative Reptile"
              className={classes.cardImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {profile.handle}
              </Typography>
              <Typography gutterBottom variant="h5" component="h5">
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </Typography>
              <Typography gutterBottom variant="h5" component="h5">
                {profile.status}
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button
              size="small"
              color="primary"
              href={`/profile/${profile.handle}`}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(cardStyle)(ProfileItem);
