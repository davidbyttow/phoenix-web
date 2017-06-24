import React, { Component } from 'react';
import styled from 'styled-components';

import Page from '../nav/Page';
import SearchBar from '../nav/components/SearchBar';

class FeedPage extends Component {
  render() {
    return (
      <Page>
        <SearchBar />
      </Page>
    );
  }
}

export default FeedPage;
