import actionTypes from './HomePageActionTypes';

export const homePage = data => async (dispatch) => {
  dispatch({ type: actionTypes.EXAMPLE_REQUEST });
};

export default { homePage };
