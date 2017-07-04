import * as types from './types';
import locationService from '../../services/location';

export function findLocation(){
  return async(dispatch, getState) => {
    try {
      const coords = await locationService.getPhonesLocation();
      console.log('location.actions#findLocation', coords);
      dispatch({ type: types.LOCATION_SET, coordinates: coords });
    } catch (e) {
      console.error( e );
    }
  };
}

// promise impl
// return function(dispatch) {
//   return locationService.getPhonesLocation().then(
//     coords => dispatch({ type: types.LOCATION_SET, coordinates: coords }),
//     error => console.error( error )
//   );
// };
