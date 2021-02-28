import React from 'react';
import { Button } from '../Custom-Buttons/Button';

const Header = props => (
  <>
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">Employee Salary</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Salary</li>
          </ul>
        </div>
        <div className="col-auto float-right ml-auto">
          <Button
            className="btn"
            data-bs-toggle="modal"
            data-target="#add_salary"
            onClick={props.toggleModal}
          >
            <i className="fa fa-plus "></i> Add Salary
          </Button>
        </div>
      </div>
    </div>
  </>
);

export default Header;
