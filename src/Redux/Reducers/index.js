import { combineReducers } from 'redux';
import hotelReducer from './hotelReducer';
import detailReducer from './detailReducer';
import signupReducer from './signupReducer';
import authenticateReducer from './authenticate';
import loginReducer from './loginReducer';
import addFavReducer from './addFavReducer';

const rootReducer = combineReducers({
  hotel: hotelReducer,
  detail: detailReducer,
  signup: signupReducer,
  authenticate: authenticateReducer,
  login: loginReducer,
  addFav: addFavReducer,
});

export default rootReducer;
