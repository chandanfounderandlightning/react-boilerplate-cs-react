/**
 *
 * RightNavigation
 *
 */

import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import '../../sass/module/rightnavigation.scss';
import navList from './Content';
import home from '../../images/ic_home.svg';
import anylytics from '../../images/ic_poll.svg';
import chat from '../../images/ic_chat.svg';
import notification from '../../images/ic_notifications.svg';
import search from '../../images/ic_search.svg';

const hImg = [home, anylytics, chat, notification, search];

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class RightNavigation extends React.PureComponent {
  navigation(listData) {
    return listData.map((item, index) => {
      const path = hImg[index];
      return (
        <li key={item.id}>
          <Link href="!#" to="">
            <span className="nav_icon">
              <LazyLoad>
                <img src={path} alt={item.name} />
              </LazyLoad>
            </span>
            <div className="nav_name">{item.name}</div>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="rightnavigation_column">
        <React.Fragment>
          <ResponsiveMenu
            menuOpenButton={<div />}
            menuCloseButton={<div />}
            changeMenuOn="500px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"
            menu={
              <ul className="main_right_navigation">
                {this.navigation(navList)}
                <li>
                  <Link href="!#" to="">
                    <div className="profile_dropdown" />
                    <div className="nav_name">Account</div>
                  </Link>
                </li>
              </ul>
            }
          />
        </React.Fragment>
      </div>
    );
  }
}

RightNavigation.propTypes = {};

export default RightNavigation;
