import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import spinnerStyles from '../../assets/jss/material-kit-react/components/spinnerStyle';
import Parallax from '../../components/Parallax/Parallax';

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
    <Parallax filter image={require('assets/img/landing-bg.jpg')}>
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
    </Parallax>
  );
};

Spinner.propTypes = {};

Spinner.defaultProps = {};

export default withStyles(spinnerStyles)(Spinner);
