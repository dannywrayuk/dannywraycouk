import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import configureStore from '../../../store/configureStore';
import rootReducer from '../../../state/rootReducer';
import HomePage from '../../ecosystems/HomePage';

const ROUTES = {
  BASE: '/',
  ERROR: '/error'
}

const store = configureStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Switch>
        <Route
          exact
          path={ROUTES.BASE}
          render={props => <HomePage {...props}/>}
        />
        <Redirect to={ROUTES.ERROR} />
      </Switch>
    </Fragment>
  </Provider>
);

export default App;
