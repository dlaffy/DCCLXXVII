import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import locationReducers from '../components/Location/reducers';

export default createStore(
  combineReducers({location: locationReducers}), 
  applyMiddleware(thunk)
);