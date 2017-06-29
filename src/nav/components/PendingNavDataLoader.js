import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom'
import { matchRoutes } from 'react-router-config';

import { fetchAsync } from '../../api/actions';
import { ENDPOINT_RESPONSES } from '../../api/fakes';

const fetchRouteData = (routes, location) => {
  const matches = matchRoutes(routes, location.pathname)

  const promises = matches.map(({ route, match }) => {
    return route.fetchData
      ? route.fetchData(match)
      : Promise.resolve(null);
  });

  return Promise.all(promises);
}

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

  componentWillMount() {
    const { routes, store } = this.props;
    const { location } = this.context.router.history;
    const matches = matchRoutes(this.props.routes, location.pathname)

    const injectedData = ENDPOINT_RESPONSES[location.pathname];

    matches.map(({ route, match }) => {
      route.loadData && route.loadData(injectedData);
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { routes, store } = this.props;
    const { location } = nextContext.router.history;

    if (this.state.location !== location) {
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
