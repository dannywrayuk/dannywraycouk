import actionTypes from './SearchActionTypes';

export const Search = data => async (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_ACTION, data });
};

export const Change = event => async (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_CHANGE, data: event.target.value });
};

export default { Search, Change };
