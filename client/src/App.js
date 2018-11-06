import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logOutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
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
import ProfilePage from './views/dashboard/ProfilePage';
import RegisterPage from './views/RegisterPage/RegisterPage.jsx';
import Dashboard from './views/dashboard/dashboard';
import CreateProfile from './views/create-profile/CreateProfile';
import EditProfile from './views/edit-profile/EditProfile';
import CreateProfileHeader from './views/create-profile/create-profileHeader';
import PrivateRoute from './views/common/PrivateRoute';
import { Provider } from 'react-redux';
import ArrowDownwardSharp from '@material-ui/icons/ArrowDownwardSharp';
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

  // Check for Expired token
  const currentTime = Date.now / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logOutUser());

    store.dispatch(clearCurrentProfile());
    //TODO: Clear current profile

    // Redirect to login
    window.location.href = '/login';
  }
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
                height: 200,
                color: 'white'
              }}
              {...rest}
            />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />

            <Route exact path="/register" component={RegisterPage} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>

            {/* <Route exact path="/profile" component={ProfilePage} /> */}
            {/* <Parallax filter image={require('assets/img/landing-bg.jpg')}>
                <div className={classes.container}>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                      <Route exact path="/" component={LandingPage} />
                      <Route exact path="/register" component={RegisterPage} />
                      

                      <Switch>
                        <PrivateRoute
                          exact
                          path="/dashboard"
                          component={Dashboard}
                        />
                      </Switch>
                    </GridItem>
                  </GridContainer>

                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                      <Route
                        exact
                        path="/create-profile"
                        component={CreateProfileHeader}
                      />
                    </GridItem>
                    
                  </GridContainer>
                </div>
              </Parallax> */}

            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} />
              </GridContainer>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default withStyles(landingPageStyle)(App);
