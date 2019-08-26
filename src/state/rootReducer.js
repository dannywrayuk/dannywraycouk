import { combineReducers } from 'redux';
import forms from './Forms/formsReducer';
import HomePageReducer from './HomePage/HomePageReducer';

export default combineReducers({
    forms,
    HomePageReducer
});