import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import FeedPage from './feed/FeedPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={FeedPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
