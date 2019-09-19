import { combineReducers } from 'redux';

import CoreStage from './CoreStage/CoreStageReducer';
import Errors from './Error/ErrorReducer';
import forms from './Forms/formsReducer';

export default combineReducers({
  forms,
  CoreStage,
  Errors,
});
