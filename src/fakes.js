import React from 'react';

export const withFakeData = (Component) => {
  return ({ match }) => {
    const data = ENDPOINT_RESPONSES[match.url] || {};
    return <Component {...data} />
  }
}

const ENDPOINT_RESPONSES = {
  '/': {
    collections: [
      {
        id: 1,
        title: "Get it again",
        items: [
          {
            title: 'Tender Greens',
            subTitle: '$2.99 delivery in 35-40 min',
            imageUrl: 'https://d2abve4vv95fsr.cloudfront.net/cQEvWsNTXuB12dVOD9EgHhrKRkI=/640x348/smart/com.postmates.img.prod.s3.amazonaws.com/c16eb63f-37f4-4428-8676-3a4146b3fee9/orig.jpg',
          },
          {
            title: 'Chipotle',
            subTitle: '$2.99 delivery in 35-40 min'
          },
          {
            title: 'Miller\'s East Coast Delicatessen',
            subTitle: '$2.99 delivery in 35-40 min'
          },
        ]
      },
      {
        id: 2,
        title: "San Francisco favorites",
        items: [
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
        ]
      }
    ]
  },
  '/place': {

  },
};
