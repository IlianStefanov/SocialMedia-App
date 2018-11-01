import React from 'react';
import { TextField } from '@material-ui/core';

import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  laber,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isrequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isrequired,
  info: PropTypes.string.isrequired,
  error: PropTypes.string,
  type: PropTypes.string.isrequired,
  onChange: PropTypes.func.isrequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  name: 'text'
};

export default TextFieldGroup;
