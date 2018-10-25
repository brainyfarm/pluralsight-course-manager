import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall } from './ajaxStatusActions';

export const loadCoursesSuccess = courses => {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
};

export const createCourseSuccess = course => {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    course
  };
};

export const updateCourseSuccess = course => {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    course
  };
};


export const loadCourses = () =>
  dispatch => {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(error => { throw(error); });
  };



export const saveCourse = course =>
  (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(savedCourse => {
        course.id ? dispatch(updateCourseSuccess(saveCourse)) :
          dispatch(createCourseSuccess(savedCourse));
      }).catch(error => { throw(error); });
  };
