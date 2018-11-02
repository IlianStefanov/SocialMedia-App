/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Face from '@material-ui/icons/Face';
import ArrowForward from '@material-ui/icons/ArrowForward';
ArrowForward;
// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import navbarsStyle from 'assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  const { isAuthenticated, user } = props.auth;

  const onLogoutClick = e => {
    e.preventDefault();

    // Logout user
    props.logOutUser();

    // Clear Profile
    props.clearCurrentProfile();
  };

  const authLinks = (
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
        <span className={classes.displayLoggedUser}>{`Welcome, ${
          user.name
        }`}</span>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          left
          caret={false}
          hoverColor="transparent"
          // dropdownHeader={`Welcome ${user.name}`}
          buttonText={
            <img src={user.avatar} className={classes.img} alt="profile" />
          }
          buttonProps={{
            className: classes.navLink + ' ' + classes.imageDropdownButton,
            color: 'transparent'
          }}
          dropdownList={[
            // Go to profile

            <a href="/profile" className={classes.listItemLink}>
              <Face className={classes.icons + ' ' + classes.linkIcon} />
              <span className={classes.linkText}>My Profile</span>
            </a>,
            // Logout Button
            <a
              onClick={onLogoutClick.bind(this)}
              className={classes.listItemLink}
            >
              <ArrowForward
                className={classes.icons + ' ' + classes.linkIcon}
              />
              <span className={classes.linkText}>Sign out</span>
            </a>
          ]}
        />
      </ListItem>
    </List>
  );
  const guestLinks = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/* <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        > */}
        <Button
          color="transparent"
          href="/register"
          className={classes.navLink}
        >
          Register
        </Button>
        {/* </Tooltip> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        > */}
        <Button color="transparent" href="/login" className={classes.navLink}>
          Login
        </Button>
        {/* </Tooltip> */}
      </ListItem>
    </List>
  );
  return isAuthenticated ? authLinks : guestLinks;
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
    { logOutUser, clearCurrentProfile }
  )(HeaderLinks)
);
