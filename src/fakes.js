import React from 'react';

import { ENDPOINT_RESPONSES } from './api/fakes';

export const withFakeData = (Component) => {
  return (props) => {
    const { match } = props;
    const data = ENDPOINT_RESPONSES[match.url] || {};
    return <Component {...data} />
  }
}
