import actionTypes from './PhysicsPageActionTypes';

const initialState = {
  stage: 'MAIN',
};

const PhysicsPageReducer = (state = initialState, action) => {
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
        stage: action.data,
      };
    }
    default:
      return state;
  }
};

export default PhysicsPageReducer;
