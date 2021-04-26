import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import AuthLayout from '../components/layouts/AuthLayout';
import paths from './paths';

const authRoutes = [
  {
    path: paths.home,
    Component: Home,
    exact: true,
  },
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

export default function RootRouter() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <AuthLayout>
        <Switch>
          {authRoutes.map(({ path, Component, exact }) => (
            <Route exact={exact} path={path}>
              <Component />
            </Route>
          ))}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </AuthLayout>
    </Router>
  );
}
