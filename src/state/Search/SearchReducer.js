import actionTypes from './SearchActionTypes';

const initialState = {
  searchTerm: '',
  redirect: false,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_ACTION: {
      return {
        ...state,
        redirect: !state.redirect,
      };
    }
    case actionTypes.SEARCH_CHANGE: {
      return {
        ...state,
        searchTerm: action.data,
      };
    }
    default:
      return state;
  }
};

export default SearchReducer;
