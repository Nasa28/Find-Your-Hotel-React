import actionTypes from '../Constants/actionTypes';
export const allHotels = (hotels) => ({
  type: actionTypes.ALL_HOTELS,
  payload: hotels,
});

export const singleHotel = (hotel) => ({
  type: actionTypes.SINGLE_HOTEL,
  payload: hotel,
});
