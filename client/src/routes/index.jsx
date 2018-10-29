import Components from 'views/Components/Components.jsx';
import LandingPage from 'views/LandingPage/LandingPage.jsx';
import ProfilePage from 'views/ProfilePage/ProfilePage.jsx';
import LoginPage from 'views/LoginPage/LoginPage.jsx';
import RegisterPage from 'views/RegisterPage/RegisterPage.jsx';

var indexRoutes = [
  { path: '/landing-page', name: 'LandingPage', component: LandingPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage },
  { path: '/profile-page', name: 'ProfilePage', component: ProfilePage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/', name: 'LandingPage', component: LandingPage }
];

export default indexRoutes;
