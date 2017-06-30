import { constants } from './actions';

const initialState = {
  collections: [],
  categories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_FEED_COLLECTIONS: {
      return {
        ...state,
        collections: action.collections,
      }
    }
    case constants.SET_FEED_CATEGORIES: {
      return {
        ...state,
        categories: action.categories,
      }
    }
    default:
  }
  return state;
};

export default reducer;
