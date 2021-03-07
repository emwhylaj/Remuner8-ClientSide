import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import CustomButton from 'components/Custom-Buttons/Button';

const Header = props => {
  const { pathname } = props.location;

  return (
    <div className="page-header">
      <Row className="align-items-center">
        <Col>
          <h3 className="page-title">Employees</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Employees</li>
          </ul>
        </Col>
        <div className="col-auto float-right ml-auto">
          <CustomButton
            className="btn add-btn mr-0 float-right"
            data-toggle="modal"
            data-target="#add_employee"
          >
            <i className="fa fa-plus"></i> Add Employee
          </CustomButton>

          <div className="view-icons float-right mr-3">
            <Button
              className={pathname.includes('all') ? 'btn-link' : null}
              onClick={() => props.history.push('/admin/employees/all')}
            >
              <i className="fa fa-th"></i>
            </Button>
            <Button
              className={pathname.includes('list') ? 'btn-link' : null}
              onClick={() =>
                props.history.push('/admin/employees/employees-list')
              }
            >
              <i className="fa fa-bars"></i>
            </Button>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default withRouter(Header);
