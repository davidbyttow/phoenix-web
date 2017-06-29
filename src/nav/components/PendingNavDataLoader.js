import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom'

import { fetchAsync } from '../../api/actions';

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

    if (this.state.location !== location) {
      this.setState({
        pending: true,
      });

      this.props.store.dispatch(fetchAsync(location.pathname)).then(() => {
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
