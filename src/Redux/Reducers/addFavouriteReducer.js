import actionTypes from '../Constants/actionTypes';

const initialState = {
  favorite: null,
};
const addFavouritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_FAVOURITES:
      return {
        favorite: payload,
      };

    default:
      return state;
  }
};

export default addFavouritesReducer;
