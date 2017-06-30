import { namespaceAction, createAction } from '../actions';

export const constants = {
  SET_PLACE_DATA: namespaceAction('SET_PLACE_DATA'),
};

export const actions = {
  setPlaceData: (id, data) => createAction(constants.SET_PLACE_DATA, { id, data }),
};

export default {
  ...constants,
  ...actions,
};
