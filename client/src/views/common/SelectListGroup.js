// import React from 'react';
// import { TextField } from '@material-ui/core';
// import withStyles from '@material-ui/core/styles/withStyles';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';
// import selectGroupStyle from '../../assets/jss/material-kit-react/components/selectInputStyle';

// const SelectListGroup = ({ ...props }) => {
//   const { name, classes, value, error, info, onChange, options } = props;

//   const selectOptions = options.map(option => (
//     <option key={option.label} value={option.value}>
//       {option.label}
//     </option>
//   ));
//   return (
//     <div className="form-group">
//       <select
//         className={classes.select + ' ' + classes.input}
//         name={name}
//         value={value}
//         onChange={onChange}
//       >
//         {selectOptions}
//       </select>

//       {error && <div className="invalid-feedback">{error}</div>}
//     </div>
//   );
// };

// SelectListGroup.propTypes = {
//   name: PropTypes.string.isrequired,
//   value: PropTypes.string.isrequired,
//   info: PropTypes.string.isrequired,
//   error: PropTypes.string,
//   onChange: PropTypes.func.isrequired,
//   options: PropTypes.array.isRequired
// };

// export default withStyles(selectGroupStyle)(SelectListGroup);
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import selectGroupStyle from '../../assets/jss/material-kit-react/components/selectInputStyle';
import customInputStyle from '../../assets/jss/material-kit-react/components/customInputStyle';
import classNames from 'classnames';

function SelectListGroup({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    info,
    id,
    onChange,
    options
  } = props;

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  const noMargin = {};
  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }

  const selectOptions = options.map(option => (
    <MenuItem key={option.label} value={option.value}>
      {option.label}
    </MenuItem>
  ));

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + ' ' + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Select
        classes={{
          input: inputClasses,
          disabled: classes.disabled,
          underline: underlineClasses
        }}
        id={id}
        onChange={onChange}
        {...inputProps}
      >
        {selectOptions}
      </Select>
    </FormControl>
  );
}

SelectListGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool
};

export default withStyles(selectGroupStyle)(SelectListGroup);
