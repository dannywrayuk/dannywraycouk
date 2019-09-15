import actionTypes from './BlogPageActionTypes';

export const BlogPage = data => async (dispatch) => {
  dispatch({ type: actionTypes.EXAMPLE_REQUEST, data });
};

export default { BlogPage };
