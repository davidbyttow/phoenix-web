import { combineReducers } from 'redux';

import { constants } from './actions';

const initialState = {};

const appReducer = (state = initialState, action) => {
  return state;
};

export const reducers = {
  appState: appReducer,
};

const allReducers = combineReducers(reducers);

const reducer = (state, action) => {
  switch (action.type) {
    // case apiActions.LOG_OUT: {
    //   state = undefined;
    //   break;
    // }
    // case apiActions.RECEIVE_RPC_ERROR: {
    //   const { error } = action;
    //
    //   // Unauthorized error, need to logout.
    //   if (error.status === 401) {
    //     alert('You have been logged out.');
    //     state = undefined;
    //   }
    //   break;
    // }
  }
  return allReducers(state, action);
};

export default reducer;
