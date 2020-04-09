import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';

import AppConstants from '../../../utilities/AppConstants';
import AppBase from '../../_atoms/App';
import Footer from '../../_organisms/Footer';
import Header from '../../_organisms/Header';
import ErrorPage from '../../ecosystems/Error';
import HomePage from '../../ecosystems/Home';
import PhysicsPage from '../../ecosystems/Physics';

// import BlogPage from '../../ecosystems/Blog';
// import MorePage from '../../ecosystems/More';
// import ProjectPage from '../../ecosystems/Project';
// import SearchPage from '../../ecosystems/Search';

const { ROUTES } = AppConstants;

const App = () => (
  <BreakpointProvider>
    <AppBase
      header={<Header />}
      content={(
        <Switch>
          <Route
            exact
            path={ROUTES.BASE}
            render={props => <HomePage {...props} />}
          />
          <Route
            exact
            path={ROUTES.BLOG}
            render={props => <ErrorPage {...props} />}
          />
          <Route
            path={ROUTES.PHYSICS_POST}
            render={props => <PhysicsPage {...props} />}
          />
          <Route
            path={ROUTES.PHYSICS_SECTION}
            render={props => <PhysicsPage {...props} />}
          />
          <Route
            exact
            path={ROUTES.PHYSICS}
            render={props => <PhysicsPage {...props} />}
          />
          <Route
            exact
            path={ROUTES.PROJECTS}
            render={props => <ErrorPage {...props} />}
          />
          <Route
            exact
            path={ROUTES.MORE}
            render={props => <ErrorPage {...props} />}
          />
          <Route
            path={ROUTES.SEARCH_TERM}
            render={props => <ErrorPage {...props} />}
          />
          <Route
            exact
            path={ROUTES.SEARCH_BLANK}
            render={props => <ErrorPage {...props} />}
          />
          <Route
            exact
            path={ROUTES.ERROR}
            render={props => <ErrorPage {...props} />}
          />
          <Redirect to={ROUTES.ERROR} />
        </Switch>
)}
      footer={<Footer />}
    />
  </BreakpointProvider>
);

export default App;
