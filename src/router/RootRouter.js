import { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import AuthLayout from '../components/layouts/AuthLayout';
import paths from './paths';
import AppLayout from '../components/layouts/AppLayout';

const authRoutes = [
  {
    path: paths.login,
    Component: Login,
    exact: true,
  },
  {
    path: paths.signUp,
    Component: SignUp,
    exact: true,
  },
];

const appRoutes = [
  {
    path: paths.myRecipes,
    Component: Home,
    exact: true,
  },
];

export default class RootRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  login = () => {
    this.setState({ loggedIn: true });
  };

  logout = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        {loggedIn ? (
          <AppLayout logout={this.logout}>
            <Switch>
              {appRoutes.map(({ path, Component: C, exact }) => (
                <Route exact={exact} path={path}>
                  <C />
                </Route>
              ))}
              <Redirect to={paths.myRecipes} />
            </Switch>
          </AppLayout>
        ) : (
          <AuthLayout login={this.login}>
            <Switch>
              {authRoutes.map(({ path, Component: C, exact }) => (
                <Route exact={exact} path={path}>
                  <C />
                </Route>
              ))}
              <Redirect to={paths.login} />
            </Switch>
          </AuthLayout>
        )}
      </Router>
    );
  }
}
