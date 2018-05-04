export const CHANGE_ACTIVE_ENTITY = 'CHANGE_ACTIVE_ENTITY';

export const changeActiveEntity = ( entity_id ) => {

  return dispatch => {

    dispatch({
      type: CHANGE_ACTIVE_ENTITY,
      payload: entity_id
    });

  }

};