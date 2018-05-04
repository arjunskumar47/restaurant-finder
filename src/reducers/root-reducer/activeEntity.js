import { CHANGE_ACTIVE_ENTITY } from './../../actions/ActiveEntity';

const activeEntity = ( state = '', action ) => {

  switch ( action.type ) {

    case CHANGE_ACTIVE_ENTITY:
      return action.payload;

    default:
      return state;

  }

};

export default activeEntity;