/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/authActions';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';
import Email from '@material-ui/icons/Email';
import profileImage from '../../assets/img/faces/avatar.jpg';
// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import navbarsStyle from 'assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  const { isAuthenticated, user } = this.props.auth;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#pablo"
          className={classes.navLink}
          onClick={e => e.preventDefault()}
          color="transparent"
        >
          Discover
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#pablo"
          className={classes.navLink}
          onClick={e => e.preventDefault()}
          color="transparent"
        >
          Wishlist
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          left
          caret={false}
          hoverColor="black"
          dropdownHeader="Dropdown Header"
          buttonText={
            <img src={profileImage} className={classes.img} alt="profile" />
          }
          buttonProps={{
            className: classes.navLink + ' ' + classes.imageDropdownButton,
            color: 'transparent'
          }}
          dropdownList={['Me', 'Settings and other stuff', 'Sign out']}
        />
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-twitter'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}

HeaderLinks.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default withStyles(navbarsStyle)(
  connect(
    mapStateToProps,
    { logOutUser }
  )(HeaderLinks)
);
