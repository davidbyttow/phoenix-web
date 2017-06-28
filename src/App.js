import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

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
          <div className="App">
            {
              routes.map((r) => <Route key={r.path} {...r} />)
            }
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
