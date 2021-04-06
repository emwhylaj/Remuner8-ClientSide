import React from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <Col sm={6} md={7} className="pt-3 pt-sm-0">
      <div className="dataTables_paginate paging_simple_numbers ">
        <nav aria-label="Departments Page navigation">
          <ul className="pagination justify-content-center justify-content-lg-end px-lg-4 mb-0">
            <li className="page-item" title="Previous Page">
              <button className="page-link">Previous</button>
            </li>
            {pages.map(page => (
              <li
                key={page}
                className={
                  page === currentPage ? 'page-item active' : 'page-item'
                }
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))}
            <li className="page-item" title="Next Page">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </Col>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
