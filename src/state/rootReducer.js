import { combineReducers } from 'redux';
import forms from './Forms/formsReducer';
import HomePageReducer from './HomePage/HomePageReducer';
import Errors from './Error/ErrorActionCreators';

export default combineReducers({
  forms,
  HomePageReducer,
  Errors,
});
