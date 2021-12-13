import actionTypes from '../constants/actionTypes';

export const allHotels = (hotels) => ({
  type: actionTypes.ALL_HOTELS,
  payload: hotels,
});


