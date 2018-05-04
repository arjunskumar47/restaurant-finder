export const SET_SEARCH_LOCATION = 'SET_SEARCH_LOCATION';

export const setSearchLocation = ( params ) => {

  return dispatch => {

    dispatch({
      type: SET_SEARCH_LOCATION,
      payload: params
    });

  }

};