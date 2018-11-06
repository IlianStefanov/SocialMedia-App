import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  PROFILE_NOT_FOUND,
  CLEAR_CURRENT_PROFILE,
  GET_PROFILES,
  UPDATE_OR_CREATE_PROFILE,
  GET_ERRORS
} from './types';

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());

  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

// Create Profile

export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
