import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger';

import feedReducer from './feed/reducer';
import history from './history';
import placeReducer from './place/reducer';
import navReducer from './nav/reducer';

const initialState = {};

const appReducer = (state = initialState, action) => {
  return state;
};

export const reducers = {
  app: appReducer,
  feed: feedReducer,
  place: placeReducer,
  nav: navReducer,
  router: routerReducer,
};

const allReducers = combineReducers(reducers);
const rootReducer = (state, action) => allReducers(state, action);

const middlewares = [thunkMiddleware, routerMiddleware(history)];
middlewares.push(createLogger());

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default store;
