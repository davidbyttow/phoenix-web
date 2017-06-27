import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import FeedPage from './feed/FeedPage';
import PlacePage from './place/PlacePage';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={FeedPage}/>
            <Route exact path="/place" component={PlacePage}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
