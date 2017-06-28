
import PlacePage from './PlacePage';
import { withFakeData } from '../fakes';

export const routes = [
  {
    path: "/place",
    exact: true,
    render: withFakeData(PlacePage),
  },
];
