import { combineReducers } from 'redux';
import hotelReducer from './hotelReducer';

const rootReducer = combineReducers({
  hotel: hotelReducer,
});

export default rootReducer;
