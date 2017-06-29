import { namespaceAction, createAction } from '../actions';

export const constants = {
  SET_FEED_COLLECTIONS: namespaceAction('SET_FEED_COLLECTIONS'),
};

export const actions = {
  setFeedCollections: (collections) => createAction(constants.SET_FEED_COLLECTIONS, { collections }),
};

export default {
  ...constants,
  ...actions,
};
