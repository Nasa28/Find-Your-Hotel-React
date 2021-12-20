import actionTypes from '../Constants/actionTypes';

export const addfavourite = (favourite) => ({
  type: actionTypes.ADD_FAVOURITES,
  payload: favourite,
});
