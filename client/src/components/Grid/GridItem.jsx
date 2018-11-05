import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const style = {
  grid: {
    position: 'relative',
    width: '100%',
    // minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
    textAlign: 'center'
  }
};

function GridItem({ ...props }) {
  const { classes, children, className, align, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
