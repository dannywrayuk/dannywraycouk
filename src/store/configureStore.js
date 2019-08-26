import { createStore } from 'redux';

const configureStore = (rootReducer) => {
    return createStore(rootReducer, {} , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
};

export default configureStore;
