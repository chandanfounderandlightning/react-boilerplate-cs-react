/**
 *
 * Twitter
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/module/twitter.scss';

/* eslint-disable react/prefer-stateless-function */
class Twitter extends React.Component {
  render() {
    return (
      <div className="twitter-feed-section-dashboard">
        <div className="twitter_row">
          <span className="edit_box">
            <h4 className="small_box_heading">Twitter Feed</h4>
          </span>
          <div className="twitter_content_column">
            <h4 className="small_bold_heading">
              Pull in company specific updates from Twitter straight to Client
              Share.
            </h4>
            <p>(All you need is the Twitter handle e.g. @myclientshare)</p>
            <span className="add_twitter_feed">
              <Link className="btn btn-primary" href="!#" to="">
                Add Twitter Feeds
              </Link>
            </span>
            <span className="bottom_heading">
              <h4 className="small_bold_heading">
                As admin, the feeds you set will be accessible by all users
                within this Share.
              </h4>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Twitter.propTypes = {};

export default Twitter;
