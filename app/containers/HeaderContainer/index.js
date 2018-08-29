/**
 *
 * HeaderContainer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHeaderContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import LeftNavigation from '../../components/LeftNavigation';
import RightNavigation from '../../components/RightNavigation';

/* eslint-disable react/prefer-stateless-function */
export class HeaderContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header_navigation_row">
          <LeftNavigation />
          <RightNavigation />
        </div>
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  headercontainer: makeSelectHeaderContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'headerContainer', reducer });
const withSaga = injectSaga({ key: 'headerContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HeaderContainer);
