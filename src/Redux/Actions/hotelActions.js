import actionTypes from '../Constants/actionTypes';
export const allHotels = (hotels) => ({
  type: actionTypes.ALL_HOTELS,
  payload: hotels,
});
