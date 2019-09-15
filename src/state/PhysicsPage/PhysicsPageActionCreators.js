import actionTypes from './PhysicsPageActionTypes';

export const PhysicsPage = data => async (dispatch) => {
  dispatch({ type: actionTypes.EXAMPLE_REQUEST, data });
};

export default { PhysicsPage };
