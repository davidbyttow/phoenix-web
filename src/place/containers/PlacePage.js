import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../nav/Page';

const PlacePage = ({ place }) => (
  <Page>
    <img src={place.imageUrl} alt={place.title} />
    <h1>{place.title}</h1>
    <h2>{place.subTitle}</h2>
  </Page>
);

PlacePage.propTypes = {
  id: PropTypes.string.isRequired,
  place: PropTypes.object.isRequired,
};

export default connect(({ place }, { id }) => ({ place: place.places[id] }))(PlacePage);
