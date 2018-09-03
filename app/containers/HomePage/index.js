/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import 'sass/style.scss';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import HeaderContainer from '../HeaderContainer/index';
import MainContent from '../MainContent/index';
import Banner from '../../components/Banner';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <header>
          <HeaderContainer />
        </header>
        <Banner />
        <MainContent />
      </React.Fragment>
    );
  }
}
