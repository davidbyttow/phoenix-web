import React, { Component, PropTypes } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter, LOCATION_CHANGE } from 'react-router-redux'

import history from './history';
import store from './store';

const routes = [
  ...require('./feed').routes,
  ...require('./place').routes,
]

class PendingNavDataLoader extends Component {

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
      route: PropTypes.object.isRequired,
      staticContext: PropTypes.object
    })
  };

  state = {
    location: this.context.router.history.location,
    pending: false,
  };

  componentWillReceiveProps(nextProps, nextContext) {
    const { routes } = this.props;
    const { location } = nextContext.router.history;
    const navigated = this.state.location !== location;

    if (navigated) {
      console.log('navigated');

      this.setState({
        pending: true,
      });

      setTimeout(() => {
        this.setState({
          location,
          pending: false,
        });
      }, 1000);
    }
  }

  render() {
    const { children } = this.props;
    const { location } = this.context.router.history;

    console.log('state location', this.state.location);
    console.log('location', location);

    return (
      <Route
        location={this.state.pending ? this.state.location : location}
        render={() => children}
      />
    )
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <PendingNavDataLoader routes={routes}>
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
