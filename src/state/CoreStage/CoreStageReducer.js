import actionTypes from './CoreStageActionTypes';

const initialState = {
  HomePage: 'MAIN',
  BlogPage: 'MAIN',
  PhysicsPage: 'MAIN',
  ProjectPage: 'MAIN',
  MorePage: 'MAIN',
};

const CoreStageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXAMPLE_REQUEST: {
      return {
        ...state,
      };
    }
    case actionTypes.EXAMPLE_FINISHED: {
      return {
        ...state,
      };
    }
    case actionTypes.EXAMPLE_SUCCESS: {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
};

export default CoreStageReducer;
