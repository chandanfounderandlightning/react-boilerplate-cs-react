/**
 *
 * LeftNavigation
 *
 */

import React from 'react';
import LazyLoad from 'react-lazy-load';
import cssymbol from 'images/cssymbol.svg';
import { Link } from 'react-router-dom';
import '../../sass/module/leftnavigation.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class LeftNavigation extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <ul className="left_nav">
          <li>
            <span className="leftnav_icon">
              <LazyLoad>
                <img src={cssymbol} alt="Logo" />
              </LazyLoad>
            </span>
            <Link href="!#" to="">
              Jio Airtel
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

LeftNavigation.propTypes = {};

export default LeftNavigation;
