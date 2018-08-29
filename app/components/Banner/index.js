/**
 *
 * Banner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import LazyLoad from 'react-lazy-load';
import editicon from 'images/edit_icon.svg';
import '../../sass/module/banner.scss';
import '../../sass/_breakpoints.scss';

/* eslint-disable react/prefer-stateless-function */
class Banner extends React.Component {
  render() {
    return (
      <div className="banner_row">
        <div className="container">
          <div className="banner_part">
            <div className="space_pic_wrap">
              <span className="left_share_img"> </span>
              <span className="right_share_img"> </span>
            </div>
            <div className="share_name">
              <h3>
                airtel / vodafone Client Share
                <span className="edit_share_name">
                  <LazyLoad>
                    <img src={editicon} alt="Edit Icon" />
                  </LazyLoad>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Banner.propTypes = {};

export default Banner;
