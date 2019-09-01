import * as Errors from '../state/Error/ErrorActionCreators';

const CallAPIMiddleware = ({ dispatch, getState }) => next => async (action) => {
  const {
    requestType,
    successType,
    finishedType,
    callAPI,
    shouldCallAPI = () => true,
  } = action;

  if (!callAPI) {
    return next(action);
  }

  if (!(typeof requestType === 'string' && typeof successType === 'string' && typeof finishedType === 'string')) {
    throw new Error('Expected requestType, successType and finishedType to be strings');
  }

  if (!shouldCallAPI(getState())) {
    return null;
  }

  dispatch({ type: requestType });
  try {
    const data = await callAPI();
    dispatch({
      type: successType,
      data: data.data || data,
    });
  } catch (error) {
    dispatch(Errors.raiseAPIError(error.status));
  }
  return dispatch({ type: finishedType });
};

export default CallAPIMiddleware;
