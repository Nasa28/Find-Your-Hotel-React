import actionTypes from '../Constants/actionTypes';

export const userSignup = () => ({
  type: actionTypes.USER_SIGNUP,
});

export const userSignupSuccess = (user) => ({
  type: actionTypes.USER_SIGNUP_SUCCESS,
  payload: user,
});

export const userSignupFailure = (error) => ({
  type: actionTypes.USER_SIGNUP_FAIL,
  payload: error,
});
