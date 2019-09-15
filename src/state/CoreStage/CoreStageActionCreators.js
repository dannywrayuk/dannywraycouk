import actionTypes from './CoreStageActionTypes';

export const CoreStage = data => async (dispatch) => {
  dispatch({ type: actionTypes.EXAMPLE_REQUEST, data });
};

export default { CoreStage };
