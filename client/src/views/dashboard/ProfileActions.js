import React from 'react';
import { Link } from 'react-router-dom';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import Popover from '@material-ui/core/Popover';
import withStyles from '@material-ui/core/styles/withStyles';
import javascriptStyles from 'assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx';
import AddExperience from '../add-credentials/add-experience';
import AddEducation from '../add-credentials/add-education';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
// @material-ui/icons
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class ProfileActions extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      classicModalExp: false,
      classicModalEdu: false,
      classicModal: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }

  handleClick(state) {
    this.setState({
      [state]: true
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem
          xs={12}
          sm={12}
          md={12}
          className={classes.profileActionsContainer}
        >
          {/* EDIT PROFILE */}

          <Button round color="info" href="/edit-profile">
            <i className="fas fa-edit" />
            <span>Edit Profile</span>
          </Button>

          {/* ADD EXPERIENCE */}
          <Button
            color="primary"
            round
            onClick={() => this.handleClick('classicModalExp')}
          >
            <i className="fas fa-plus-circle" />
            Add Experience
          </Button>
          <Dialog
            classes={{
              root: classes.center,
              paper: classes.modal
            }}
            open={this.state.classicModalExp}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => this.handleClose('classicModalExp')}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
          >
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <IconButton
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => this.handleClose('classicModalExp')}
              >
                <Close className={classes.modalClose} />
              </IconButton>
              <h4 className={classes.modalTitle}>Add Experience</h4>
            </DialogTitle>
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
              <AddExperience />
            </DialogContent>
          </Dialog>

          <Button
            color="primary"
            round
            onClick={() => this.handleClick('classicModalEdu')}
          >
            <i className="fas fa-plus-circle" />
            Add Education
          </Button>
          <Dialog
            classes={{
              root: classes.center,
              paper: classes.modal
            }}
            open={this.state.classicModalEdu}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => this.handleClose('classicModalEdu')}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
          >
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <IconButton
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => this.handleClose('classicModalEdu')}
              >
                <Close className={classes.modalClose} />
              </IconButton>
              <h4 className={classes.modalTitle}>Add Education</h4>
            </DialogTitle>
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
              <AddEducation />
            </DialogContent>
          </Dialog>

          {/* <Link to="/add-education">
            <Button round color="info">
              <i className="fas fa-plus-circle" />
              <span>Add Education</span>
            </Button>
          </Link> */}
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(javascriptStyles)(ProfileActions);
