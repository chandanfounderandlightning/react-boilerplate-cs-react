/**
 *
 * QuickLinks
 *
 */

import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import editicon from 'images/edit_icon_gray.svg';
import '../../sass/module/quicklink.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class QuickLinks extends React.Component {
  render() {
    return (
      <div className="quick_links_preview">
        <div className="quick_row">
          <span className="edit_box">
            <h4 className="small_box_heading">Quick Links</h4>
            <span className="edit_icon">
              <LazyLoad>
                <img src={editicon} alt="Edit" />
              </LazyLoad>
            </span>
          </span>
          <div className="quick_link_col">
            <Link href="!#" to="">
              List of usability strengths
            </Link>
            <Link href="!#" to="">
              List of usability problems
            </Link>
            <Link href="!#" to="">
              Examples of best practices
            </Link>
            <Link href="!#" to="">
              When to do an Expert Review
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

QuickLinks.propTypes = {};

export default QuickLinks;
