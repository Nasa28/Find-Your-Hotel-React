import actionTypes from '../Constants/actionTypes';

const initialState = {
  favorite: [],
};

const fetchFavReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_FAVOURITES:
      return {
        ...state,
        favorite: payload,
      };

    default:
      return state;
  }
};

export default fetchFavReducer;
