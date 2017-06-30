import { namespaceAction, createAction } from '../actions';

export const constants = {
  SET_PAGE_LOADING: namespaceAction('SET_PAGE_LOADING'),
};

export const actions = {
  setPageLoading: (loading) => createAction(constants.SET_PAGE_LOADING, { loading }),
};

export default {
  ...constants,
  ...actions,
};
