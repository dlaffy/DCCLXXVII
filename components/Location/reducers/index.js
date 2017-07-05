import Immutable from 'seamless-immutable';

const initialState = Immutable({
  location : {
    latitude: 0,
    longitude: 0
  }
});
 
export const UPDATE_LOCATION = 'UPDATE_LOCATION'

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return state.merge({ location: action.coordinates });
    default:
      return state;
  }
}
