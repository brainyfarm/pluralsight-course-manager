import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export const loadCoursesSuccess = courses => {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
};

export const createCourseSuccess;

export const updateCourseSuccess;

export const loadCourses = () =>
  dispatch =>
    courseApi.getAllCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(error => { throw(error); });



export const saveCourse = course =>
  (dispatch, getState) =>
    courseApi.saveCourse(course)
      .then(savedCourse => {
        course.id ? dispatch(updateCourseSuccess(saveCourse)) :
          dispatch(createCourseSuccess(savedCourse));
      }).catch(error => { throw(error); });
