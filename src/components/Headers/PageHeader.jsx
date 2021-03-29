import React from 'react';
import { Col, Row } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

const Header = ({ children, match, button }) => {
  const title = match.url.slice(7);
  return (
    <div className="page-header">
      <Row className="align-items-center">
        <Col>
          <h3 className="page-title text-capitalize">{title}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active text-capitalize">{title}</li>
          </ul>
        </Col>
        <div className="col-auto float-right ml-auto">
          {button}
          <div className="view-icons float-right mr-3">{children}</div>
        </div>
      </Row>
    </div>
  );
};

export default withRouter(Header);
