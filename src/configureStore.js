import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from 'reducers/index.js';

function configureStore() {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    compose;
  /* eslint-enable */

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  return createStore(reducer, enhancer);
}

export default configureStore;
