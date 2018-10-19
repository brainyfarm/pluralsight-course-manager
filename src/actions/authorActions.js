import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export const loadAuthorSuccess = authors => {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  };
};

export const loadAuthors = () => {
  return dispatch => {
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorSuccess(authors));
      }).catch(error => {
        throw(error);
      });
  };
};
