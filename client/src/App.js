import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import indexRoutes from 'routes/index.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
// Import Router
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

// Import components
import Header from './components/Header/Header.jsx';
import HeaderLinks from './components/Header/HeaderLinks.jsx';
import GridContainer from './components/Grid/GridContainer.jsx';
import GridItem from './components/Grid/GridItem.jsx';
import landingPageStyle from './assets/jss/material-kit-react/views/landingPage.jsx';
import Parallax from './components/Parallax/Parallax.jsx';
import './App.css';
import LandingPage from './views/LandingPage/LandingPage.jsx';
import LoginPage from './views/LoginPage/LoginPage.jsx';
import RegisterPage from './views/RegisterPage/RegisterPage.jsx';

import { Provider } from 'react-redux';

// import REDUX store
import store from './store';

var hist = createBrowserHistory();

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and is authenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <Provider store={store}>
        <Router history={hist}>
          <div className="App">
            <Header
              color="transparent"
              // routes={dashboardRoutes}
              brand="Material Kit React"
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 400,
                color: 'white'
              }}
              {...rest}
            />

            <Parallax filter image={require('assets/img/landing-bg.jpg')}>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/login" component={LoginPage} />
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            {/* <Switch>
            {indexRoutes.map((prop, key) => {
              return (
                <Route path={prop.path} key={key} component={prop.component} />
              );
            })}
          </Switch> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default withStyles(landingPageStyle)(App);
