import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import configureStore from '../../../store/configureStore';
import rootReducer from '../../../state/rootReducer';
import HomePage from '../../ecosystems/HomePage';
import BlogPage from '../../ecosystems/BlogPage';
import PhysicsPage from '../../ecosystems/PhysicsPage';
import ProjectPage from '../../ecosystems/ProjectPage';
import MorePage from '../../ecosystems/MorePage';
import ErrorPage from '../../ecosystems/ErrorPage';
import textContent from '../../../text/SharedContent';
import { TextStore } from '../../../text/textStore';
import template from '../../../text/Store/template';
import jsx from '../../../text/Store/jsx';
import AppConstants from '../../../utilities/AppConstants';
import AppBase from '../../_atoms/App';
import Header from '../../_organisms/Header';
import Footer from '../../_organisms/Footer';

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
