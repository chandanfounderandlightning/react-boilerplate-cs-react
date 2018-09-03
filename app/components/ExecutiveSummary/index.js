/**
 *
 * ExecutiveSummary
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import editicon from 'images/edit_icon_gray.svg';
import '../../sass/module/executivesummary.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class ExecutiveSummary extends React.Component {
  render() {
    return (
      <div className="executive_summary_preview">
        <span className="edit_box">
          <h4 className="small_box_heading">Executive Summary</h4>
          <span className="edit_icon">
            <LazyLoad>
              <img src={editicon} alt="Edit" />
            </LazyLoad>
          </span>
        </span>
        <p className="small-box-paragraph">
          We’ll import and store your contacts to suggest connections and show
          you relevant updates. You control who you connect to, and you can
          manage your contacts anytime. Allows 5 to 6 lines of summary.
        </p>
        <div className="summary_links">
          <Link href="!#" to="">
            Key document link 1
          </Link>
          <Link href="!#" to="">
            Key document link 2
          </Link>
        </div>
      </div>
    );
  }
}

ExecutiveSummary.propTypes = {};

export default ExecutiveSummary;
