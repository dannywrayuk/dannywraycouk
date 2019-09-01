import actionTypes from './ErrorActionTypes';

const intitialState = {
  forbidden: false,
  technicalError: false,
};

const errorReducer = (state = intitialState, action) => {
  switch (action.type) {
    case actionTypes.INTERNAL_ERROR: {
      return {
        ...state,
        technicalError: true,
      };
    }
    case actionTypes.FORBIDDEN: {
      return {
        ...state,
        forbidden: true,
      };
    }
    default: return state;
  }
};

export default errorReducer;
