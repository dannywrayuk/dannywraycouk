import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';

import AppBase from '../../components/_atoms/AppBase';
import Redirector from '../../components/_atoms/Redirector';
import ErrorPage from '../../components/environments/Error';
import HomePage from '../../components/environments/Home';
import PhysicsPage from '../../components/environments/Physics';
import AppConstants from '../../utilities/AppConstants';
import GlobalStyle from './App.style';

// import BlogPage from '../../ecosystems/Blog';
// import MorePage from '../../ecosystems/More';
// import ProjectPage from '../../ecosystems/Project';
// import SearchPage from '../../ecosystems/Search';

const { ROUTES } = AppConstants;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <BreakpointProvider>
      <Switch>
        <Route
          exact
          path={ROUTES.BASE}
          render={props => (
            <AppBase>
              <HomePage {...props} />
            </AppBase>
          )}
        />
        <Route
          exact
          path={ROUTES.BLOG}
          render={props => (
            <AppBase>
              <ErrorPage {...props} />
            </AppBase>
          )}
        />
        <Route
          path={ROUTES.PHYSICS_POST}
          render={props => (
            <AppBase>
              <PhysicsPage {...props} />
            </AppBase>
          )}
        />
        <Route
          path={ROUTES.PHYSICS_SECTION}
          render={props => (
            <AppBase>
              <PhysicsPage {...props} />
            </AppBase>
          )}
        />
        <Route
          exact
          path={ROUTES.PHYSICS}
          render={props => (
            <AppBase>
              <PhysicsPage {...props} />
            </AppBase>
          )}
        />
        <Route
          exact
          path={ROUTES.PROJECTS}
          render={props => (
            <AppBase>
              <ErrorPage {...props} />
            </AppBase>
          )}
        />
        <Route
          exact
          path={ROUTES.MORE}
          render={props => (
            <AppBase>
              <ErrorPage {...props} />
            </AppBase>
          )}
        />
        <Route
          path={ROUTES.SEARCH_TERM}
          render={props => (
            <AppBase>
              <ErrorPage {...props} />
            </AppBase>
          )}
        />
        <Route
          exact
          path={ROUTES.SEARCH_BLANK}
          render={props => (
            <AppBase>
              <ErrorPage {...props} />
            </AppBase>
          )}
        />
        <Route
          exact
          path={ROUTES.ERROR}
          render={props => (
            <AppBase>
              <ErrorPage {...props} />
            </AppBase>
          )}
        />
        <Route
          path={ROUTES.REDIRECTOR}
          render={props => <Redirector {...props} />}
        />
        <Redirect to={ROUTES.REDIRECTOR} />
      </Switch>
    </BreakpointProvider>
  </BrowserRouter>
);

export default App;
