import React from 'react';
import ReactToPrint from 'react-to-print';

const Nav = props => (
  <div className="page-header">
    <div className="row align-items-center">
      <div className="col">
        <h3 className="page-title">Payslip</h3>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Payslip</li>
        </ul>
      </div>
      <div className="col-auto float-right ml-auto">
        <div className="btn-group btn-group-sm">
          <button className="btn btn-white">CSV</button>
          <button className="btn btn-white">PDF</button>
          <ReactToPrint
            trigger={() => (
              <button className="btn btn-white">
                <i className="fa fa-print fa-lg"></i> Print
              </button>
            )}
            content={props.content}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
