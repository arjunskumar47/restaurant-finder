import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers/rootReducer';

const configureStore = (initialState, options = { logger: true }) => {
  const middleware = [thunk];

  if (process.env.NODE_ENV !== 'production' && options.logger) {
    const logger = createLogger({ collapsed: true });
    middleware.push(logger);
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );

};

export default configureStore;
