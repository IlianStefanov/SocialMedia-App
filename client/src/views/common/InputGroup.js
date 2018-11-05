import React from 'react';
import { TextField, Input } from '@material-ui/core';

import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
  name,
  placeholder,
  value,
  error,

  onChange,
  icon,
  type
}) => {
  return (
    <div className="form-group">
      <textarea
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isrequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isrequired,
  icon: PropTypes.string.isrequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isrequired,
  type: PropTypes.string.isRequired
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
