import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from 'assets/jss/material-kit-react.jsx';
import { container, title } from 'assets/jss/material-kit-react.jsx';

const postStyle = {
  commentInfo: {
    display: 'inline-flex',
    alignItems: 'center'
  },
  postOuterContainer: {
    width: '100%',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    marginTop: '35px'
  },
  container,
  commentContainer: {
    flexGrow: '2',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '1px 0px 63px #e8e8e8',
    marginTop: '50px',
    position: 'relative'
  },
  commentImg: {
    borderRadius: '50%',
    maxWidth: '70px'
  },
  textWrapper: {
    display: 'flex'
  }
};

export default postStyle;
