import { combineReducers } from 'redux';
import hotelReducer from './hotelReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
  hotel: hotelReducer,
  detail: detailReducer,
});

export default rootReducer;
