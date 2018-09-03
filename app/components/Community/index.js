import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import '../../sass/module/executivesummary.scss';
import '../../sass/module/community.scss';
import Data from '../../components/Community/CommunityContent';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
    };
  }
  render() {
    return (
      <div className="executive_summary_preview">
        <Link className="invite_preview-link" href="!#" to="">
          &nbsp;
        </Link>
        <span className="edit_box">
          <h4 className="small_box_heading">Community</h4>
        </span>
        <div className="review_row">
          {this.state.data.map(item => (
            <div key={item.id} className="member_col">
              <div className="col_services review_col text-center">
                <h3>
                  161
                  <span className="invite_data"> {item.heading}</span>
                </h3>
                <span className="client_pic">
                  <LazyLoad>
                    <img src={item.memberpic} alt="" />
                  </LazyLoad>
                  <LazyLoad>
                    <img src={item.memberpic} alt="" />
                  </LazyLoad>
                  <LazyLoad>
                    <img src={item.memberpic} alt="" />
                  </LazyLoad>
                  <LazyLoad>
                    <img src={item.memberpic} alt="" />
                  </LazyLoad>
                  <LazyLoad>
                    <img src={item.memberpic} alt="" />
                  </LazyLoad>
                </span>
                <h3>
                  7
                  <span className="invite_data"> {item.invites}</span>
                </h3>
                <div className="invite_btn">
                  <Link className="btn btn-primary" href="!#" to="">
                    Invite
                  </Link>
                </div>
                <Link href="!#" to="">
                  {item.paragraph}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Community.propTypes = {};

export default Community;
