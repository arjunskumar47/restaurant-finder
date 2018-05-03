import { combineReducers } from 'redux';

import app from './root-reducer/app';

const rootReducer = combineReducers({
  app
});

export default rootReducer;