import reducer from '../Redux/Reducers/hotelReducer';
import actionTypes from '../Redux/Constants/actionTypes';
import hotels from './Hotel.test';

describe('Hotel Reducer', () => {
  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({ hotels: [] });
  });

  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).not.toEqual(undefined);
  });

  it('Should return new state if action type is recieved', () => {
    const newState = reducer(undefined, {
      type: actionTypes.ALL_HOTELS,
      payload: hotels,
    });

    expect(newState).toEqual({ hotels });
  });

  it('Should return new state if action type is recieved', () => {
    const newState = reducer(undefined, {
      type: actionTypes.ALL_HOTELS,
      payload: hotels,
    });

    expect(newState).not.toEqual(null);
  });
});
