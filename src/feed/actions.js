import { namespaceAction, createAction } from '../actions';

export const constants = {
  SET_FEED_CATEGORIES: namespaceAction('SET_FEED_CATEGORIES'),
  SET_FEED_COLLECTIONS: namespaceAction('SET_FEED_COLLECTIONS'),
};

export const actions = {
  setCategories: (categories) => createAction(constants.SET_FEED_CATEGORIES, { categories }),
  setCollections: (collections) => createAction(constants.SET_FEED_COLLECTIONS, { collections }),
};

export default {
  ...constants,
  ...actions,
};
