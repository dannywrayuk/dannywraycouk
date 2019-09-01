import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import callAPIMiddleware from './callAPIMiddleware';

const midldlewareConfig = () => {
  const config = [
    applyMiddleware(thunkMiddleware, callAPIMiddleware),
  ];
  if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
    config.push(window.devToolsExtension());
  }
  return config;
};

const configureStore = (rootReducer) => createStore(
  rootReducer,
  {},
  // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(...midldlewareConfig()),
);

export default configureStore;
