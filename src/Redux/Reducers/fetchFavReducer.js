import actionTypes from '../Constants/actionTypes';

const initialState = {
  favourites: [],
};

const fetchFavReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_FAVOURITES:
      return { ...state, favourites: payload };

    default:
      return state;
  }
};

export default fetchFavReducer;
