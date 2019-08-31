import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import configureStore from '../../../store/configureStore';
import rootReducer from '../../../state/rootReducer';
import HomePage from '../../ecosystems/HomePage';
import textContent from '../../../text/SharedContent';
import { TextStore } from '../../../text/textStore';
import template from '../../../text/Store/template';
import jsx from '../../../text/Store/jsx';

const ROUTES = {
  BASE: '/',
  ERROR: '/error',
};

const store = configureStore(rootReducer);

const App = () => (
  <TextStore
    transformers={{
      template,
      jsx,
    }}
    value={textContent}
  >
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
  </TextStore>
);

export default App;
