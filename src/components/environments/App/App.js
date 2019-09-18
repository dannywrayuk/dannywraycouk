import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';

import AppBase from '../../_atoms/App';
import Footer from '../../_organisms/Footer';
import Header from '../../_organisms/Header';
import rootReducer from '../../../state/rootReducer';
import configureStore from '../../../store/configureStore';
import textContent from '../../../text/SharedContent';
import jsx from '../../../text/Store/jsx';
import template from '../../../text/Store/template';
import { TextStore } from '../../../text/textStore';
import AppConstants from '../../../utilities/AppConstants';
import BlogPage from '../../ecosystems/BlogPage';
import ErrorPage from '../../ecosystems/ErrorPage';
import HomePage from '../../ecosystems/HomePage';
import MorePage from '../../ecosystems/MorePage';
import PhysicsPage from '../../ecosystems/PhysicsPage';
import ProjectPage from '../../ecosystems/ProjectPage';
import SearchPage from '../../ecosystems/SearchPage';

const { ROUTES } = AppConstants;

const store = configureStore(rootReducer);

const App = () => (
  <TextStore
    transformers={{
      template,
      jsx,
    }}
    value={textContent}
  >
    <BreakpointProvider>
      <Provider store={store}>
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
                render={props => <BlogPage {...props} />}
              />
              <Route
                exact
                path={ROUTES.PHYSICS}
                render={props => <PhysicsPage {...props} />}
              />
              <Route
                exact
                path={ROUTES.PROJECTS}
                render={props => <ProjectPage {...props} />}
              />
              <Route
                exact
                path={ROUTES.MORE}
                render={props => <MorePage {...props} />}
              />
              <Route
                path={ROUTES.SEARCH}
                render={props => <SearchPage {...props} />}
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
      </Provider>
    </BreakpointProvider>
  </TextStore>
);

export default App;
