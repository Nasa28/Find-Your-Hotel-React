import actionTypes from '../Constants/actionTypes';

const initialState = {
  hotels: [],
};

const hotelReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ALL_HOTELS:
      return { ...state, hotels: payload };
    default:
      return state;
  }
};

export default hotelReducer;
