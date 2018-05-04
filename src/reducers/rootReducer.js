import { combineReducers } from 'redux';

import app from './root-reducer/app';
import loading from './root-reducer/loading';
import entities from './root-reducer/entities';
import activeEntity from './root-reducer/activeEntity';
import location from './root-reducer/location';

const rootReducer = combineReducers({
  app,
  loading,
  entities,
  activeEntity,
  location
});

export default rootReducer;