import {
  grayColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from 'assets/jss/material-kit-react.jsx';

const boxStyles = {
  box: {
    padding: '1rem',
    background: 'white',
    margin: '1rem',
    boxShadow: '0 0px 120px -50px rgba(0,0,0,1)',
    position: 'relative'
  },
  close: {
    color: '#777',
    font: '10px/100% arial, sans-serif',
    position: 'absolute',
    right: '8px',
    top: '8px',
    textDecoration: 'none',
    textShadow: '0 1px 0 #fff',
    textDecoration: 'none',
    color: primaryColor,
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '3px 6px',
    fontWeight: 'bold',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  title: {
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none'
  },
  space50: {
    height: '50px',
    display: 'block'
  },
  space70: {
    height: '70px',
    display: 'block'
  },
  icons: {
    width: '17px',
    height: '17px',
    color: '#FFFFFF'
  }
};

export default boxStyles;
