
import actions from './actions';
import FeedPage from './FeedPage';
import store from '../store';

export const routes = [
  {
    path: "/",
    exact: true,
    component: FeedPage,
    loadData: (data) => {
      store.dispatch(actions.setCollections(data.collections));
      store.dispatch(actions.setCategories(data.categories));
    },
  },
];
