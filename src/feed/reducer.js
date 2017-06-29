import { constants } from './actions';

const initialState = {
  collections: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_FEED_COLLECTIONS: {
      return {
        ...state,
        collections: action.collections,
      }
    }
  }
  return state;
};

export default reducer;
