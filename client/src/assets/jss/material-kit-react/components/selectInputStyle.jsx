import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from 'assets/jss/material-kit-react.jsx';

const selectInputStyle = {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  selectEmpty: {
    // marginTop: theme.spacing.unit * 2
  },
  textarea: {
    appearance: 'none',
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    width: '100%',
    color: '#000000 !important',
    // padding: $select-padding 0;
    fontSize: '14px',
    // color: $select-color;
    border: 'none',
    margin: '27px 0 17px 0',
    borderBottom: '1px solid #D2D2D2',
    '&:after': {
      position: 'absolute',
      top: '0.75em',
      right: '0.5em',
      /* Styling the down arrow */
      width: '0',
      height: '0',
      padding: '0',
      content: '',
      borderLeft: '.25em solid transparent',
      borderRight: '.25em solid transparent',
      borderTop: '.375em solid' + primaryColor,
      pointerEvents: 'none'
    }
  },

  disabled: {
    '&:before': {
      borderColor: 'transparent !important'
    }
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: '#D2D2D2 !important',
      borderWidth: '1px !important'
    },
    '&:after': {
      borderColor: primaryColor
    }
  },
  underlineError: {
    '&:after': {
      borderColor: dangerColor
    }
  },
  underlineSuccess: {
    '&:after': {
      borderColor: successColor
    }
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: '#FFFFFF'
    },
    '&:after': {
      borderColor: '#FFFFFF'
    }
  },
  labelRoot: {
    ...defaultFont,
    color: '#AAAAAA !important',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.42857',
    top: '10px',
    '& + $underline': {
      marginTop: '0px'
    }
  },
  labelRootError: {
    color: dangerColor + ' !important'
  },
  labelRootSuccess: {
    color: successColor + ' !important'
  },
  formControl: {
    margin: '0 0 17px 0',
    paddingTop: '27px',
    position: 'relative',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: '#AAAAAA'
    },
    textAlign: 'left'
  },
  input: {
    color: '#495057',
    '&,&::placeholder': {
      fontSize: '14px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.42857',
      opacity: '1'
    },
    '&::placeholder': {
      color: '#AAAAAA'
    }
  },
  whiteInput: {
    '&,&::placeholder': {
      color: '#FFFFFF',
      opacity: '1'
    }
  }
};

export default selectInputStyle;
