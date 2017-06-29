import { namespaceAction, createAction } from '../actions';

import { ENDPOINT_RESPONSES } from './fakes';

export const constants = {
  REQUEST_DATA: namespaceAction('REQUEST_DATA'),
  DATA_RECEIVED: namespaceAction('DATA_RECEIVED'),
  REQUEST_DATA_FAILED: namespaceAction('REQUEST_DATA_FAILED'),
};

export const actions = {
  requestData: (path, options) => createAction(constants.REQUEST_DATA, { path, ...options }),
  dataReceived: (path, data) => createAction(constants.DATA_RECEIVED, { path, data }),
  requestDataFailed: (path, error) => createAction(constants.REQUEST_DATA_FAILED, { path, error }),
};

export const fetchAsync = path => dispatch => {
  dispatch(actions.requestData(path));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ENDPOINT_RESPONSES[path];
      if (data) {
        dispatch(actions.dataReceived(path, data));
        resolve(data);
      } else {
        const error = { status: 404 };
        dispatch(actions.requestDataFailed(path, error))
        reject(error);
      }
    }, 200);
  });
}

export default {
  ...constants,
  ...actions,
  fetchAsync,
};
