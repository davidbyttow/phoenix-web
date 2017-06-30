import { constants } from './actions';

const initialState = {
  places: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_PLACE_DATA: {
      return {
        ...state,
        places: {
          ...state.places,
          [action.id]: action.data,
        },
      }
    }
  }
  return state;
};

export default reducer;
