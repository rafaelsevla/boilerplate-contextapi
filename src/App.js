import React, { lazy, Suspense, useState, useEffect } from 'react';
import t from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import { useAuth } from './hooks';

import { HOME, LOGIN } from './routes';

const MainPage = lazy(() => import('./pages/main'));
const Login = lazy(() => import('./pages/login'));

function App({ location }) {
  const { userInfo, setUserInfo } = useAuth();
  const [didCheckUserIn, setDidCheckUserIn] = useState(false);

  const { isUserLoggedIn } = userInfo;

  useEffect(() => {
    // setUserInfo({
    //   isUserLoggedIn: false,
    //   user: {
    //     name: 'Rafael',
    //     email: 'rafaelsevla@gmail.com'
    //   }
    // });
    setDidCheckUserIn(true);
  }, [setUserInfo]);

  if (!didCheckUserIn) {
    return <LinearProgress />;
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    console.log('redirect home');
    return <Redirect to={HOME} />;
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    console.log('redirect login');
    return <Redirect to={LOGIN} />;
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  );
}

App.propTypes = {
  location: t.object.isRequired
};

export default App;
