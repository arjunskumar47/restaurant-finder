import { TOGGLE_LOADING } from './../../actions/Loading';

const loading = ( state = false, action ) => {

  switch ( action.type ) {

    case TOGGLE_LOADING:
      return !state;

    default:
      return state;

  }

};

export default loading;