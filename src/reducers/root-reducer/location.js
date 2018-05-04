import { SET_SEARCH_LOCATION } from './../../actions/Location';

const location = (state = {}, action) => {

  switch ( action.type ) {

    case SET_SEARCH_LOCATION:
      return action.payload;

    default:
      return state;

  }

};

export default location;