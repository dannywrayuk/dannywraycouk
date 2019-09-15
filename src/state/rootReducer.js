import { combineReducers } from 'redux';
import forms from './Forms/formsReducer';
import Errors from './Error/ErrorActionCreators';
import CoreStage from './CoreStage/CoreStageReducer';

export default combineReducers({
  forms,
  CoreStage,
  Errors,
});
