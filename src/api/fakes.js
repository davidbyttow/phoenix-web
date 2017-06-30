export const PLACE_STORE = {
  'tender-greens': {
    id: 'tender-greens',
    title: 'Tender Greens',
    subTitle: '$2.99 delivery in 35-40 min',
    imageUrl: 'https://d2abve4vv95fsr.cloudfront.net/cQEvWsNTXuB12dVOD9EgHhrKRkI=/640x348/smart/com.postmates.img.prod.s3.amazonaws.com/c16eb63f-37f4-4428-8676-3a4146b3fee9/orig.jpg',
  },
  'chipotle': {
    id: 'chipotle',
    title: 'Chipotle',
    subTitle: '$2.99 delivery in 35-40 min',
    imageUrl: 'https://pixel.nymag.com/imgs/daily/grub/2016/11/17/17-chipotle-chorizo-burrito.w600.h315.2x.jpg',
  },
  'millers': {
    id: 'millers',
    title: 'Miller\'s East Coast Delicatessen',
    subTitle: '$2.99 delivery in 35-40 min'
  },
  'pizzeria-delfina': {
    id: 'pizzeria-delfina',
    title: 'Pizzeria Delfina',
    subTitle: '$2.99 delivery in 35-40 min'
  },
  'ace-wasabi': {
    id: 'ace-wasabi',
    title: 'Ace Wasabi',
    subTitle: '$2.99 delivery in 35-40 min'
  },
  'curry-up-now': {
    id: 'curry-up-now',
    title: 'Curry Up Now',
    subTitle: '$2.99 delivery in 35-40 min'
  },
};

const COLLECTION_STORE = {
  1: {
    id: 1,
    title: "Get it again",
    items: [
      PLACE_STORE['tender-greens'],
      PLACE_STORE['chipotle'],
      PLACE_STORE['millers'],
    ]
  },
  2: {
    id: 2,
    title: "San Francisco favorites",
    items: [
      PLACE_STORE['pizzeria-delfina'],
      PLACE_STORE['ace-wasabi'],
      PLACE_STORE['curry-up-now'],
    ]
  }
};

const CATEGORIES = [
  {
    name: 'Burgers',
    imageUrl: 'https://s3.amazonaws.com/trycaviar.com/offers/641/200462-201705221728.jpg',
  },
  {
    name: 'Mexican',
    imageUrl: 'https://s3.amazonaws.com/trycaviar.com/offers/280/11601.jpg',
  },
  {
    name: 'Pizza',
    imageUrl: 'https://s3.amazonaws.com/trycaviar.com/offers/527/21258.jpg',
  },
  {
    name: 'Chinese',
  },
  {
    name: 'Breakfast',
  },
  {
    name: 'Dessert',
  },
  {
    name: 'Fast food',
  },
]


export const ENDPOINT_RESPONSES = {
  '/': {
    collections: [
      COLLECTION_STORE[1],
      COLLECTION_STORE[2],
    ],
    categories: [ ...CATEGORIES ],
  },
  '/place/tender-greens': PLACE_STORE['tender-greens'],
  '/place/chipotle': PLACE_STORE['chipotle'],
};
