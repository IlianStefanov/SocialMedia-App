import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
// core components

import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';

import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: '' });
      }.bind(this),
      10
    );
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const loginUser = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(loginUser);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.container}>
        <Card className={classes[this.state.cardAnimaton]}>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h4>Login</h4>
              <div className={classes.socialLine}>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={'fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={'fab fa-facebook'} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={'fab fa-google-plus-g'} />
                </Button>
              </div>
            </CardHeader>
            <p className={classes.divider}>Or Be Classical</p>
            <CardBody>
              <CustomInput
                labelText="Email..."
                id="email"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: 'email',
                  value: this.state.email,
                  onChange: this.onChange,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />
              <CustomInput
                labelText="Password"
                id="password"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: 'password',
                  value: this.state.password,
                  onChange: this.onChange,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className={classes.inputIconsColor}>
                        lock_outline
                      </Icon>
                    </InputAdornment>
                  )
                }}
              />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button color="success" size="lg" type="submit" round>
                Log in
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);