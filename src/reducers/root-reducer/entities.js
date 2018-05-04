import { ADD_LOCATION_ENTITY } from '../../actions/Entities';

const entities = ( state = {}, action ) => {

  switch ( action.type ) {

    case ADD_LOCATION_ENTITY:
      return addLocationEntity(state, action.payload);

    default:
      return state;

  }

};

const addLocationEntity = ( state, payload ) => {

  const { location } = payload;
  return Object.assign({}, state, {
    [location.entity_id]: payload
  });

};

export default entities;