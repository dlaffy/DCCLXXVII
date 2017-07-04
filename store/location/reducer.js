// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import Immutable from 'seamless-immutable';
import * as types from './types';

const initialState = Immutable({
  location : {
    latitude:  0,
    longitude: 0
  }
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOCATION_SET:
      console.log('Location.reducer#LOCATION_SET ', action.coordinates);
      return state.merge({ location: action.coordinates });
    default:
      return state;
  }
}

// selectors
export function getLocation(state) {
  return state.location;
}
