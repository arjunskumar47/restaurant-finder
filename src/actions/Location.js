export const searchLocation = ( text ) => {

  return dispatch => {

    console.log('Inside dispatch fn', text);
    dispatch({
      type: 'TEST',
      payload: {}
    });

  }

};

export const getRestaurantsForLocation = () => {

};