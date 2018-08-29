/**
 *
 * Asynchronously loads the component for LeftNavigation
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
