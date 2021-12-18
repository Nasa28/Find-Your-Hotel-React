import actionTypes from '../Constants/actionTypes';

export const getFavourites = (favouites) => ({
  type: actionTypes.FAVOURITES,
  payload: favouites,
});

export const addFavorite = (favorite) => ({
  type: actionTypes.ADD_FAVOURITES,
  payload: favorite,
});