
import FeedPage from './FeedPage';
import { withFakeData } from '../fakes';

export const routes = [
  {
    path: "/",
    exact: true,
    render: withFakeData(FeedPage),
  },
];
