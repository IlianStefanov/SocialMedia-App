import React from 'react';
import { TextField } from '@material-ui/core';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import textAreaStyle from '../../assets/jss/material-kit-react/components/textAreaStyle';

const TextAreaFieldGroup = ({ ...props }) => {
  const { name, placeholder, value, error, info, onChange, classes } = props;
  return (
    <div className="form-group">
      <textarea
        className={classes.textarea}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isrequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isrequired,
  info: PropTypes.string.isrequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isrequired
};

export default withStyles(textAreaStyle)(TextAreaFieldGroup);
