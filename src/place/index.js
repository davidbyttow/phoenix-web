
import PlacePage from './PlacePage';
import { withFakeData } from '../fakes';

export const routes = [
  {
    path: "/",
    exact: true,
    render: withFakeData(PlacePage),
  },
];
