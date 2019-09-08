/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import callAPIMiddleware from './callAPIMiddleware';

const midldlewareConfig = () => {
  const config = [
    applyMiddleware(thunkMiddleware, callAPIMiddleware),
  ];
  if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__()) {
    config.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  return config;
};

const configureStore = (rootReducer) => createStore(
  rootReducer,
  {},
  compose(...midldlewareConfig()),
);

export default configureStore;
