import actionTypes from '../Constants/actionTypes';

const initialState = {
  details: [],
};

const detailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SINGLE_HOTEL:
      return { ...state, details: payload };
    default:
      return state;
  }
};

export default detailReducer;
