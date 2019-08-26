import { createStore } from 'redux';

const configureStore = (rootReducer) => createStore(
  rootReducer,
  {},
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default configureStore;
