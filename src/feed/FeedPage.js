import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CategorySet from './components/CategorySet';
import Page from '../nav/Page';
import PlaceSet from './components/PlaceSet';
import SearchBar from '../nav/components/SearchBar';

const FeedPage = ({ categories, collections }) => (
  <Page>
    <SearchBar />
    <Section>
      <CategorySet categories={categories} />
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


const Section = styled.div`
  margin-top: 44px;
`;

export default connect(({ feed }) => ({
  collections: feed.collections,
  categories: feed.categories,
}))(FeedPage);
