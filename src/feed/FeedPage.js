import React, { Component } from 'react';
import styled from 'styled-components';

import CategorySet from './components/CategorySet';
import Page from '../nav/Page';
import PlaceSet from './components/PlaceSet';
import SearchBar from '../nav/components/SearchBar';

class FeedPage extends Component {
  render() {
    return (
      <Page>
        <SearchBar />
        <Section>
          <CategorySet />
        </Section>
        <Section>
          <PlaceSet
            title="Get it again"
            places={GET_IT_AGAIN_PLACES}
          />
        </Section>
        <Section>
          <PlaceSet
            title="San Francisco favorites"
            places={FAVORITE_PLACES}
          />
        </Section>
      </Page>
    );
  }
}

const Section = styled.div`
  margin-top: 44px;
`

const GET_IT_AGAIN_PLACES = [
  {
    title: 'Tender Greens',
    subTitle: '$2.99 delivery in 35-40 min'
  },
  {
    title: 'Chipotle',
    subTitle: '$2.99 delivery in 35-40 min'
  },
  {
    title: 'Miller\'s East Coast Delicatessen',
    subTitle: '$2.99 delivery in 35-40 min'
  },
];

const FAVORITE_PLACES = [
  {
    title: 'Pizzeria Delfina',
    subTitle: '$2.99 delivery in 35-40 min'
  },
  {
    title: 'Ace Wasabi',
    subTitle: '$2.99 delivery in 35-40 min'
  },
  {
    title: 'Curry Up Now',
    subTitle: '$2.99 delivery in 35-40 min'
  },
];

export default FeedPage;
