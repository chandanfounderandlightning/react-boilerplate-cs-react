/**
 *
 * FileViewer
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/module/quicklink.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class FileViewer extends React.Component {
  render() {
    return (
      <div className="quick_links_preview">
        <div className="quick_row">
          <Link className="invite_preview-link" href="!#" to="">
            &nbsp;
          </Link>
          <span className="edit_box">
            <h4 className="small_box_heading">File Viewer</h4>
          </span>
          <div className="file_upload_col">
            <span className="file_count">62</span>
          </div>
          <div className="view-all_link">
            <Link href="!#" to="">
              View all files
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

FileViewer.propTypes = {};

export default FileViewer;
