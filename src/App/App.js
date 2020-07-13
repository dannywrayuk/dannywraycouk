import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';

import AppBase from '../components/_atoms/AppBase';
import Redirector from '../components/_atoms/Redirector';
import Archive from '../components/environments/Archive';
import Blog from '../components/environments/Blog';
import Error from '../components/environments/Error';
import Home from '../components/environments/Home';
import Physics from '../components/environments/Physics';
import Post from '../components/environments/Post';
import AppConstants from '../utilities/AppConstants';
import { ThemeProvider } from '../utilities/ThemeContext';
import GlobalStyle from './App.style';

// import MorePage from '../../ecosystems/More';
// import ProjectPage from '../../ecosystems/Project';
// import SearchPage from '../../ecosystems/Search';


const { ROUTES } = AppConstants;

const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <GlobalStyle />
      <BreakpointProvider>
        <Switch>
          <Route
            exact
            path={ROUTES.BASE}
            render={props => (
              <AppBase>
                <Home {...props} />
              </AppBase>
            )}
          />
          <Route
            exact
            path={ROUTES.BLOG}
            render={props => (
              <AppBase>
                <Blog {...props} />
              </AppBase>
            )}
          />
          <Route
            exact
            path={ROUTES.POST}
            render={props => (
              <AppBase>
                <Post {...props} />
              </AppBase>
            )}
          />
          <Route
            exact
            path={ROUTES.ARCHIVE}
            render={props => (
              <AppBase>
                <Archive {...props} />
              </AppBase>
            )}
          />
          <Route
            path={ROUTES.PHYSICS_POST}
            render={props => (
              <AppBase>
                <Physics {...props} />
              </AppBase>
            )}
          />
          <Route
            path={ROUTES.PHYSICS_SECTION}
            render={props => (
              <AppBase>
                <Physics {...props} />
              </AppBase>
            )}
          />
          <Route
            exact
            path={ROUTES.PHYSICS}
            render={props => (
              <AppBase>
                <Physics {...props} />
              </AppBase>
            )}
          />
          <Route
            exact
            path={ROUTES.PROJECTS}
            render={props => (
              <AppBase>
                <Error {...props} />
              </AppBase>
            )}
          />
          <Route
            exact
            path={ROUTES.MORE}
            render={props => (
              <AppBase>
                <Error {...props} />
              </AppBase>
            )}
          />
          <Route
            path={ROUTES.SEARCH_TERM}
            render={props => (
              <AppBase>
                <Error {...props} />
              </AppBase>
            )}
          />
          <Route
            exact
            path={ROUTES.SEARCH_BLANK}
            render={props => (
              <AppBase>
                <Error {...props} />
              </AppBase>
            )}
          />
          <Route
            exact
            path={ROUTES.ERROR}
            render={props => (
              <AppBase>
                <Error {...props} />
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
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
