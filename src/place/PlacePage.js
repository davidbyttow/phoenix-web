import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Page from '../nav/Page';

class PlacePage extends Component {
  render() {
    console.log('rendering', this.props);
    return (
      <Page>
        <img src={this.props.place.imageUrl} />
        <h1>{this.props.place.title}</h1>
        <h2>{this.props.place.subTitle}</h2>
      </Page>
    );
  }
}

export default connect(({ place }, { id }) => ({ place: place.places[id] }))(PlacePage);
