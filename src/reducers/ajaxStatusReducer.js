import * as types from '../actions/actionTypes';
import initialState from './initialState';

const actionTypesEndsInSuccess = (type) => {
  return type.endsWith('_SUCCESS');
};

export default (state = initialState.ajaxCallsInProgress, action) => {
  if(action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actionTypesEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
};
