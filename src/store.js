import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

import reducer from './reducer';

const middlewares = [thunkMiddleware];
middlewares.push(createLogger());

const rootReducer = reducer;

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default store;
