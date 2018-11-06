import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from 'assets/jss/material-kit-react.jsx';

const textAreaStyle = {
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
  }
};

export default textAreaStyle;
