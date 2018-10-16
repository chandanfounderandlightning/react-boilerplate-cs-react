/**
 *
 * Addpostbox
 *
 */

import React from 'react';
import '../../sass/module/addfeedpost.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Addpostbox extends React.Component {
  render() {
    return (
      <div className="add_post_feed">
        <form onSubmit={this.handleSubmit}>
          <div className="shareupdate_wrap">
            <span className="pro_pic_wrap" />
            <textarea placeholder="Click here to add text, files, links etc." />
            <div className="post_submit">
              <button className="btn btn-default feed_post_btn">Post</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Addpostbox.propTypes = {};

export default Addpostbox;
