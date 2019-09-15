import actionTypes from './MorePageActionTypes';

export const MorePage = data => async (dispatch) => {
  dispatch({ type: actionTypes.EXAMPLE_REQUEST, data });
};

export default { MorePage };
