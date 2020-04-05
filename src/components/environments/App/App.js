import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';

import textContent from '../../../text/SharedContent';
import jsx from '../../../text/Store/jsx';
import template from '../../../text/Store/template';
import { TextStore } from '../../../text/textStore';
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
  <TextStore
    transformers={{
      template,
      jsx,
    }}
    value={textContent}
  >
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
  </TextStore>
);

export default App;
