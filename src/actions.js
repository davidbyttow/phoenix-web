export const namespaceAction = (action: string) => `PM/${action}`;
export const createAction = (type: string, payload = {}) => ({ type, ...payload });

export const constants = {
};

export const actions = {
};

export default {
  ...constants,
  ...actions,
};
