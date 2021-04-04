import React from 'react'
import { Col } from 'reactstrap';

const Pagination = (props) => {
    return (
      <Col sm={6} md={7} className="pt-3 pt-sm-0">
        <div className="dataTables_paginate paging_simple_numbers ">
          <nav aria-label="Departments Page navigation">
            <ul className="pagination justify-content-center mb-0">
              <li className="page-item" title="Previous Page">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item">
                <a className="page-link">1</a>
              </li>
              <li className="page-item" title="Next Page">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Col>
    );
}

export default Pagination
