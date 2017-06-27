import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store';

const routes = [
  ...require('./feed').routes,
  ...require('./place').routes,
]

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {
              routes.map((r) => <Route key={r.path} {...r} />)
            }
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
