import HttpStatus from 'http-status-codes';

import actionTypes from './ErrorActionTypes';

export const raiseTechnicalError = () => ({
  type: actionTypes.INTERNAL_ERROR,
});

export const raiseForbiddenError = () => ({
  type: actionTypes.INTERNAL_ERROR,
});

export const raiseAPIError = status => (dispatch) => {
  switch (parseInt(status, 10)) {
    case HttpStatus.INTERNAL_SERVER_ERROR:
      dispatch(raiseTechnicalError());
      break;
    case HttpStatus.FORBIDDEN:
      dispatch(raiseForbiddenError());
      break;
    default:
      dispatch(raiseTechnicalError());
  }
};

export default { raiseAPIError };
