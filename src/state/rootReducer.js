import { combineReducers } from 'redux';

import CoreStage from './CoreStage/CoreStageReducer';
import Errors from './Error/ErrorReducer';
import forms from './Forms/formsReducer';
import Search from './Search/SearchReducer';

export default combineReducers({
  forms,
  CoreStage,
  Search,
  Errors,
});
