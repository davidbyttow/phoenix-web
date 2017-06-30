import { constants } from './actions';

const initialState = {
  pageLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_PAGE_LOADING: {
      return {
        ...state,
        pageLoading: action.loading,
      };
    }
    default:
  }
  return state;
};

export default reducer;
