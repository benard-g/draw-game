import React, { FC, lazy, Suspense } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import CenterContainer from '../components/layout/CenterContainer';
import LoadingWheel from '../components/loaders/LoadingWheel';
import Home from '../pages/Home';

const Rooms = lazy(() => import('../pages/Rooms'));

interface RouteWithLoaderProps {
  path: string;
}

const RouteWithLoader: FC<RouteWithLoaderProps> = (props) => {
  const { path, children } = props;

  const Loader = (
    <CenterContainer>
      <LoadingWheel size={48} />
    </CenterContainer>
  );

  return (
    <Route path={path}>
      <Suspense fallback={Loader}>{children}</Suspense>
    </Route>
  );
};

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <RouteWithLoader path="/rooms">
          <Rooms />
        </RouteWithLoader>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
