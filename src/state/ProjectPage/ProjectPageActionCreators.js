import actionTypes from './ProjectPageActionTypes';

export const ProjectPage = data => async (dispatch) => {
  dispatch({ type: actionTypes.EXAMPLE_REQUEST, data });
};

export default { ProjectPage };
