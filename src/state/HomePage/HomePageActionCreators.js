import actionTypes from './HomePageActionTypes';

export const HomePage = data => async (dispatch) => {
  dispatch({ type: actionTypes.EXAMPLE_REQUEST, data });
};

export default { HomePage };
