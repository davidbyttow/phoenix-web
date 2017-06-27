import React, { Component } from 'react';
import styled from 'styled-components';

import CategorySet from './components/CategorySet';
import Page from '../nav/Page';
import PlaceSet from './components/PlaceSet';
import SearchBar from '../nav/components/SearchBar';

class FeedPage extends Component {
  render() {
    const { collections } = this.props;
    return (
      <Page>
        <SearchBar />
        <Section>
          <CategorySet />
        </Section>
        {
          collections.map((c) => (
            <Section key={c.id}>
              <PlaceSet
                title={c.title}
                places={c.items}
              />
            </Section>
          ))
        }
      </Page>
    );
  }
}

const Section = styled.div`
  margin-top: 44px;
`;

export default FeedPage;
