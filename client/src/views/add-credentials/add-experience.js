import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import Button from 'components/CustomButtons/Button.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import Datetime from 'react-datetime';
import FormControl from '@material-ui/core/FormControl';
// Icons

import { addExperience } from '../../actions/profileActions';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Check from '@material-ui/icons/Check';

import basicsStyle from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx';
import withStyles from '@material-ui/core/styles/withStyles';

class AddExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false,

      checked: [24, 22],
      selectedEnabled: 'b',
      checkedA: true,
      checkedB: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleToggle = e => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(e);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(e);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      current: !this.state.current,
      checked: newChecked
    });
  };
  onSubmit(e) {
    e.preventDefault();
    const profileDataExperience = {
      title: this.state.title,
      company: this.state.company,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description,
      location: this.state.location,
      current: this.state.current
    };

    this.props.addExperience(profileDataExperience, this.props.history);

    console.log('submitted');
  }
  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <form onSubmit={this.onSubmit} className="form">
            <CustomInput
              labelText="Company"
              id="company"
              // {...(errors.name ? error : {})}
              formControlProps={{
                fullWidth: true
              }}
              error={errors.status ? true : ''}
              // labelProps={error}
              inputProps={{
                name: 'company',
                type: 'text',
                value: this.state.company,
                onChange: this.onChange,

                info: '',
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faBuilding} />
                  </InputAdornment>
                )
              }}
            />

            <CustomInput
              labelText="Job Title"
              id="title"
              // {...(errors.name ? error : {})}
              formControlProps={{
                fullWidth: true
              }}
              error={errors.status ? true : ''}
              // labelProps={error}
              inputProps={{
                name: 'title',
                type: 'text',
                value: this.state.title,
                onChange: this.onChange,

                info: '',
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                  </InputAdornment>
                )
              }}
            />

            <CustomInput
              labelText="Location"
              id="company"
              // {...(errors.name ? error : {})}
              formControlProps={{
                fullWidth: true
              }}
              // labelProps={error}
              inputProps={{
                name: 'location',
                type: 'text',
                value: this.state.location,
                onChange: this.onChange,

                info: '',
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faBuilding} />
                  </InputAdornment>
                )
              }}
            />
            <GridContainer justyfy="center">
              <GridItem xs={12} sm={12} md={6} lg={6}>
                {/* <Datetime
                  inputProps={{
                    placeholder: 'From'
                  }}
                /> */}
                <CustomInput
                  labelText="From"
                  id="from"
                  // {...(errors.name ? error : {})}
                  formControlProps={{
                    fullWidth: true
                  }}
                  // labelProps={error}
                  inputProps={{
                    name: 'from',
                    type: 'text',
                    value: this.state.from,
                    onChange: this.onChange,

                    info: ''
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6} lg={6}>
                {/* <Datetime
                  inputProps={{
                    placeholder: this.state.current
                      ? 'You are currently working there'
                      : 'To',
                    disabled: this.state.current
                  }}
                /> */}
                <CustomInput
                  labelText={
                    this.state.current
                      ? 'You are currently working there'
                      : 'To'
                  }
                  id="to"
                  // {...(errors.name ? error : {})}
                  formControlProps={{
                    fullWidth: true
                  }}
                  // labelProps={error}

                  inputProps={{
                    disabled: this.state.current ? true : false,
                    name: 'to',
                    type: 'text',
                    value: this.state.to,
                    onChange: this.onChange,

                    info: ''
                  }}
                />
              </GridItem>
            </GridContainer>
            <TextAreaFieldGroup
              placeholder="Description"
              name="bio"
              value={this.state.bio}
              onChange={this.onChange}
              info="Give us an idea of where you are at in your career"
            />

            <FormControlLabel
              control={
                <Checkbox
                  tabIndex={-1}
                  onClick={() => this.handleToggle(21)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                  inputProps={{
                    name: 'current',
                    type: 'checkbox',
                    value: this.state.current,
                    // onChange: this.onChange,
                    id: 'current'
                  }}
                />
              }
              classes={{ label: classes.label }}
              label="Current"
            />

            <Button color="success" size="md" type="submit" round>
              Add Experience
            </Button>
          </form>
        </GridItem>
      </GridContainer>
    );
  }
}
AddExperience.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default withStyles(basicsStyle)(
  connect(
    mapStateToProps,
    { addExperience }
  )(withRouter(AddExperience))
);
