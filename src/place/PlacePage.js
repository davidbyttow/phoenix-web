import React from 'react';
import { connect } from 'react-redux';

import Page from '../nav/Page';

const PlacePage = ({ place }) => (
  <Page>
    <img src={place.imageUrl} alt={place.title} />
    <h1>{place.title}</h1>
    <h2>{place.subTitle}</h2>
  </Page>
);

export default connect(({ place }, { id }) => ({ place: place.places[id] }))(PlacePage);
