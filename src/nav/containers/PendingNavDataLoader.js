import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom'
import { matchRoutes } from 'react-router-config';

import actions from '../actions';
import { fetchAsync } from '../../api/actions';
import { ENDPOINT_RESPONSES } from '../../api/fakes';

class PendingNavDataLoader extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
      route: PropTypes.object.isRequired,
      staticContext: PropTypes.object
    }),
    routes: PropTypes.array,
  };

  state = {
    location: this.context.router.history.location,
    pending: false,
  };

  componentWillMount() {
    const { routes } = this.props;
    const { location } = this.context.router.history;
    const matches = matchRoutes(routes, location.pathname)

    // TODO(d): This should just be injected on the page.
    const injectedData = ENDPOINT_RESPONSES[location.pathname];

    matches.map(({ route, match }) => {
      return route.loadData && route.loadData(injectedData);
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { routes, store } = this.props;
    const { location } = nextContext.router.history;

    if (this.state.location !== location) {
      store.dispatch(actions.setPageLoading(true));
      this.setState({
        pending: true,
      });

      const matches = matchRoutes(routes, location.pathname)

      const promises = matches.map(({ route, match }) => {
        return route.loadData
          ? store.dispatch(fetchAsync(location.pathname)).then((data) => {
            route.loadData(data);
            return data;
          })
          : Promise.resolve(null);
      });

      Promise.all(promises).then(() => {
        store.dispatch(actions.setPageLoading(false));
        this.setState({
          location,
          pending: false,
        });
      });
    }
  }

  render() {
    const { children } = this.props;
    const { location } = this.context.router.history;

    const renderedLocation = this.state.pending ? this.state.location : location;
    return (
      <Route
        location={renderedLocation}
        render={() => children}
      />
    )
  }
}

export default PendingNavDataLoader;
