import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import FeedPage from './feed/FeedPage';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={FeedPage}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
