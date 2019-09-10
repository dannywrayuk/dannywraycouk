import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import configureStore from '../../../store/configureStore';
import rootReducer from '../../../state/rootReducer';
import HomePage from '../../ecosystems/HomePage';
import textContent from '../../../text/SharedContent';
import { TextStore } from '../../../text/textStore';
import template from '../../../text/Store/template';
import jsx from '../../../text/Store/jsx';
import AppConstants from '../../../utilities/AppConstants';

const ROUTES = AppConstants.ROUTES.HOMEPAGE;

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
        <Switch>
          <Route
            exact
            path={ROUTES.BASE}
            render={props => <HomePage {...props} />}
          />
          <Redirect to={ROUTES.ERROR} />
        </Switch>
      </Provider>
    </BreakpointProvider>
  </TextStore>
);

export default App;
