import Home from './Home';
// import About from './About';
import asyncComponent from '../lib/asyncComponent';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent({
      loader: () => import('./About'),
      Placeholder: null,
    }),
  },
];