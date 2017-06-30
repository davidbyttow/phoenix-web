import React from 'react';
import actions from './actions';
import PlacePage from './PlacePage';
import store from '../store';

export const routes = [
  {
    path: "/place/:id",
    loadData: (data) => {
      console.log('loading', data);
      store.dispatch(actions.setPlaceData(data.id, data));
    },
    render: ({ match }) => {
      const { id } = match.params
      console.log('id', id);
      return <PlacePage id={id} />
    },
  },
];
