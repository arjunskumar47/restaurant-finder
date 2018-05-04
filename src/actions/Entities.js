import ApiConnection from './../utils/ApiConnection';
import { toggleLoading } from './Loading';
import { changeActiveEntity } from './ActiveEntity';
import { setSearchLocation } from './Location';

export const ADD_LOCATION_ENTITY = 'ADD_LOCATION_ENTITY';

export const searchLocation = ( text, cb ) => {

  ApiConnection.get(`/locations?query=${text}&count=20`)
    .then( result => {

      cb( null, result.data.location_suggestions );

    })
    .catch( e => {

      cb(e);

    });

};

export const getRestaurantsForLocation = ( params ) => {

  return dispatch => {

    dispatch(toggleLoading());
    dispatch(changeActiveEntity(''));
    dispatch(setSearchLocation(params));
    ApiConnection.get(`/geocode?lat=${params.latitude}&lon=${params.longitude}`)
      .then( result => {

        const { data } = result;
        dispatch({
          type: ADD_LOCATION_ENTITY,
          payload: data
        });
        dispatch(changeActiveEntity(data.location.entity_id));
        dispatch(toggleLoading());

      })
      .catch( e => {

        console.log( e );
        dispatch(toggleLoading());

      });

  }

};

export const findLocationUsingBrowserAPI = (cb) => {

  if( 'geolocation' in navigator ) {
    navigator.geolocation.getCurrentPosition( position => {
      cb(null, position)
    }, error => {

      let message = '';
      switch(error.code) {
        case error.PERMISSION_DENIED:
          message = 'User denied the request for Geolocation.';
          break;
        case error.POSITION_UNAVAILABLE:
          message = 'Location information is unavailable.';
          break;
        case error.TIMEOUT:
          message = 'The request to get user location timed out.';
          break;
        case error.UNKNOWN_ERROR:
          message = 'An unknown error occurred.';
          break;
      }

      cb(message);

    })
  } else {

    cb('Automatic location finder is not supported by your browser.')

  }

};