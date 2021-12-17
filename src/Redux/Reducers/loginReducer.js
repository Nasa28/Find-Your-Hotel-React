import actionTypes from "../Constants/actionTypes";

const initialState = {
  user: {},
  error: null,
  loggedIn: false,
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGIN:
      return {
        user: payload,
        error: null,
        loggedIn: true,
      };

    case actionTypes.USER_LOGIN_FAIL:
      return {
        user: {},
        error: payload,
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
