import React from 'react';
import actions from './actions';
import PlacePage from './containers/PlacePage';
import store from '../store';

export const routes = [
  {
    path: "/place/:id",
    loadData: (data) => {
      store.dispatch(actions.setPlaceData(data.id, data));
    },
    render: ({ match }) => {
      const { id } = match.params
      return <PlacePage id={id} />
    },
  },
];
