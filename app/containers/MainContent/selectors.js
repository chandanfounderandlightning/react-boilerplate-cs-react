import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainContent state domain
 */

const selectMainContentDomain = state => state.get('mainContent', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainContent
 */

const makeSelectMainContent = () =>
  createSelector(selectMainContentDomain, substate => substate.toJS());

export default makeSelectMainContent;
export { selectMainContentDomain };
