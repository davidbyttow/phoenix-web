import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { withProps } from 'recompose';

import FeedPage from './feed/FeedPage';
import PlacePage from './place/PlacePage';
import store from './store';
import { ENDPOINT_RESPONSES } from './fakes';

const withFakeData = (Component) => {
  return ({ match }) => {
    const data = ENDPOINT_RESPONSES[match.url] || {};
    return <Component {...data} />
  }
}

const ROUTES = [
  {
    path: "/",
    exact: true,
    render: withFakeData(FeedPage),
  },
  {
    path: "/place",
    exact: true,
    render: withFakeData(PlacePage),
  },
]

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {
              ROUTES.map((r) => <Route key={r.path} {...r} />)
            }
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
