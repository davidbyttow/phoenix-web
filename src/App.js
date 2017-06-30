import React from 'react';
import { Route } from 'react-router-dom'
import { connect, Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import LoadingBar from './nav/components/LoadingBar';
import PendingNavDataLoader from './nav/containers/PendingNavDataLoader';
import history from './history';
import store from './store';

const routes = [
  ...require('./feed').routes,
  ...require('./place').routes,
]

const Loader = connect(({ nav }) => ({ loading: nav.pageLoading }))(({ loading }) => <LoadingBar loading={loading}/>)

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PendingNavDataLoader routes={routes} store={store}>
        <div className="App">
          <Loader />
          { routes.map((r) => <Route key={r.path} {...r} />) }
        </div>
      </PendingNavDataLoader>
    </ConnectedRouter>
  </Provider>
);

export default App;
