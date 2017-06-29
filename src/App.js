import React, { Component, PropTypes } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter, LOCATION_CHANGE } from 'react-router-redux'

import PendingNavDataLoader from './nav/components/PendingNavDataLoader';
import history from './history';
import store from './store';

const routes = [
  ...require('./feed').routes,
  ...require('./place').routes,
]

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
