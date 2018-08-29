/**
 *
 * Asynchronously loads the component for RightNavigation
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
