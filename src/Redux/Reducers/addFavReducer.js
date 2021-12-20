import actionTypes from '../Constants/actionTypes';

const initialState = {
  loading: false,
  favorite: null,
};

const addFavReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_FAVOURITES:
      return {
        loading: false,
        favorite: payload,
      };

    default:
      return state;
  }
};

export default addFavReducer;
