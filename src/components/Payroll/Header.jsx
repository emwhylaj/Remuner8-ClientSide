import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
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
            <div className="col-auto float-right ml-auto" >
              <button
                className="btn btn-primary add-btn"
                data-toggle="modal"
                data-target="#add_salary"
                
              >
                <i className="fa fa-plus "></i> Add Salary
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
