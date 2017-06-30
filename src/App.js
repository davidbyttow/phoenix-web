import React from 'react';
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import PendingNavDataLoader from './nav/components/PendingNavDataLoader';
import history from './history';
import store from './store';

const routes = [
  ...require('./feed').routes,
  ...require('./place').routes,
]

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PendingNavDataLoader routes={routes} store={store}>
        <div className="App">
          { routes.map((r) => <Route key={r.path} {...r} />) }
        </div>
      </PendingNavDataLoader>
    </ConnectedRouter>
  </Provider>
);

export default App;
