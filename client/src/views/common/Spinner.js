import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import spinnerStyles from '../../assets/jss/material-kit-react/components/spinnerStyle';

// const Spinner = () => (
//   <div className="spinner">
//     <div />
//     <div />
//     <div />
//     <div />
//     <div />
//     <div />
//     <div />
//     <div />
//     <div />
//     <div />
//     <div />
//     <div />
//   </div>
// );

// export default withStyles(spinnerStyles)(Spinner);
const Spinner = ({
  classes,
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
    <div className={classes.spinner}>
      <div className={classes.spinnerElement} />
      <div className={classes.spinnerElement} />
      <div className={classes.spinnerElement} />
      <div className={classes.spinnerElement} />
      <div className={classes.spinnerElement} />
      <div className={classes.spinnerElement} />
      <div className={classes.spinnerElement} />
      <div className={classes.spinnerElement} />
      <div className={classes.spinnerElement} />
      <div className={classes.spinnerElement} />
      <div className={classes.spinnerElement} />
      <div className={classes.spinnerElement} />
    </div>
  );
};

Spinner.propTypes = {};

Spinner.defaultProps = {};

export default withStyles(spinnerStyles)(Spinner);
