const spinnerStyle = {
  spinner: {
    color: 'white',
    display: 'inline-block',
    position: 'relative',
    width: '64px',
    height: '64px'
  },
  spinnerElement: {
    transformOrigin: '32px 32px',
    animation: 'lds-spinner 1.2s linear infinite',

    // Each element of spinner
    // Each element of spinner
    '&:after': {
      borderRadius: '20%',
      background: '#fff',
      position: 'absolute',
      zIndex: '1',
      width: '5px',
      height: '14px',
      display: 'block',
      left: '29px',
      top: '3px',
      content: "''"
    },
    '&:nth-child(1)': {
      transform: 'rotate(0deg)',
      animationDelay: '-1.1s'
    },
    '&:nth-child(2)': {
      transform: 'rotate(30deg)',
      animationDelay: '-1s'
    },
    '&:nth-child(3)': {
      transform: 'rotate(60deg)',
      animationDelay: '-0.9s'
    },
    '&:nth-child(4)': {
      transform: 'rotate(90deg)',
      animationDelay: '-0.8s'
    },
    '&:nth-child(5)': {
      transform: 'rotate(120deg)',
      animationDelay: '-0.7s'
    },
    '&:nth-child(6)': {
      transform: 'rotate(150deg)',
      animationDelay: '-0.6s'
    },
    '&:nth-child(7)': {
      transform: 'rotate(180deg)',
      animationDelay: '-0.5s'
    },
    '&:nth-child(8)': {
      transform: 'rotate(210deg)',
      animationDelay: '-0.4s'
    },
    '&:nth-child(9)': {
      transform: 'rotate(240deg)',
      animationDelay: '-0.3s'
    },
    '&:nth-child(10)': {
      transform: 'rotate(270deg)',
      animationDelay: '-0.2s'
    },
    '&:nth-child(11)': {
      transform: 'rotate(300deg)',
      animationDelay: '-0.1s'
    },
    '&:nth-child(12)': {
      transform: 'rotate(330deg)',
      animationDelay: '0s'
    }
  }
};

export default spinnerStyle;
// '&::after': {
//   content: ' ',
//   display: 'block',
//   position: 'absolute',
//   top: '3px',
//   left: '29px',
//   width: '5px',
//   height: '14px',
//   borderRadius: '20%',
//   background: '#fff'
// }
//

//   .lds-spinner div:nth-child(4) {
//     transform: rotate(90deg);
//     animation-delay: -0.8s;
//   }
//   .lds-spinner div:nth-child(5) {
//     transform: rotate(120deg);
//     animation-delay: -0.7s;
//   }
//   .lds-spinner div:nth-child(6) {
//     transform: rotate(150deg);
//     animation-delay: -0.6s;
//   }
//   .lds-spinner div:nth-child(7) {
//     transform: rotate(180deg);
//     animation-delay: -0.5s;
//   }
//   .lds-spinner div:nth-child(8) {
//     transform: rotate(210deg);
//     animation-delay: -0.4s;
//   }
//   .lds-spinner div:nth-child(9) {
//     transform: rotate(240deg);
//     animation-delay: -0.3s;
//   }
//   .lds-spinner div:nth-child(10) {
//     transform: rotate(270deg);
//     animation-delay: -0.2s;
//   }
//   .lds-spinner div:nth-child(11) {
//     transform: rotate(300deg);
//     animation-delay: -0.1s;
//   }
//   .lds-spinner div:nth-child(12) {
//     transform: rotate(330deg);
//     animation-delay: 0s;
//   }
//   @keyframes lds-spinner {
//     0% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//     }
//   }
