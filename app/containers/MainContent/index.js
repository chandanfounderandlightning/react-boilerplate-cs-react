import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMainContent from './selectors';
import reducer from './reducer';
import saga from './saga';
import ExecutiveSummary from '../../components/ExecutiveSummary';
import Community from '../../components/Community';
import QuickLinks from '../../components/QuickLinks';
import FileViewer from '../../components/FileViewer';

/* eslint-disable react/prefer-stateless-function */
export class MainContent extends React.Component {
  render() {
    return (
      <section className="main_content_section">
        <div className="container">
          <div className="main_content_left_column">
            <ExecutiveSummary />
            <Community />
            <QuickLinks />
            <FileViewer />
          </div>
        </div>
      </section>
    );
  }
}

/* MainContent.propTypes = {
  dispatch: PropTypes.func.isRequired,
}; */

const mapStateToProps = createStructuredSelector({
  maincontent: makeSelectMainContent(),
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

const withReducer = injectReducer({ key: 'mainContent', reducer });
const withSaga = injectSaga({ key: 'mainContent', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainContent);
