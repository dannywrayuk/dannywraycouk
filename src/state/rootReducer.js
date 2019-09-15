import { combineReducers } from 'redux';
import forms from './Forms/formsReducer';
import HomePageReducer from './HomePage/HomePageReducer';
import BlogPageReducer from './BlogPage/BlogPageReducer';
import PhysicsPageReducer from './PhysicsPage/PhysicsPageReducer';
import ProjectPageReducer from './ProjectPage/ProjectPageReducer';
import MorePageReducer from './MorePage/MorePageReducer';
import Errors from './Error/ErrorActionCreators';

export default combineReducers({
  forms,
  HomePageReducer,
  BlogPageReducer,
  PhysicsPageReducer,
  ProjectPageReducer,
  MorePageReducer,
  Errors,
});
