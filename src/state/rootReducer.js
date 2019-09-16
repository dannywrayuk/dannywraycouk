import { combineReducers } from 'redux';

import CoreStage from './CoreStage/CoreStageReducer';
import Errors from './Error/ErrorActionCreators';
import forms from './Forms/formsReducer';

export default combineReducers({
  forms,
  CoreStage,
  Errors,
});
