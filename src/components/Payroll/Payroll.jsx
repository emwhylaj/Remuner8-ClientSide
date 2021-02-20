import React, { Component } from 'react'
import './Payroll.css';

class Payroll extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Employee Salary</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Salary</li>
                </ul>
              </div>
              <div className="col-auto float-right ml-auto">
                <a
                  href="#"
                  className="btn add-btn"
                  data-toggle="modal"
                  data-target="#add_salary"
                >
                  <i className="fa fa-plus"></i> Add Salary
                </a>
              </div>
            </div>
          </div>

          <div className="row filter-row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus">
                <input type="text" className="form-control floating" />
                <label className="focus-label">Employee Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus select-focus">
                <select className="select floating">
                  <option value=""> -- Select -- </option>
                  <option value="">Employee</option>
                  <option value="1">Manager</option>
                </select>
                <label className="focus-label">Role</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus select-focus">
                <select className="select floating">
                  <option> -- Select -- </option>
                  <option> Pending </option>
                  <option> Approved </option>
                  <option> Rejected </option>
                </select>
                <label className="focus-label">Leave Status</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus">
                <div className="cal-icon">
                  <input
                    className="form-control floating datetimepicker"
                    type="text"
                  />
                </div>
                <label className="focus-label">From</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus">
                <div className="cal-icon">
                  <input
                    className="form-control floating datetimepicker"
                    type="text"
                  />
                </div>
                <label className="focus-label">To</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <a href="#" className="btn btn-success btn-block">
                {' '}
                Search{' '}
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table datatable">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Employee ID</th>
                      <th>Email</th>
                      <th>Join Date</th>
                      <th>Role</th>
                      <th>Salary</th>
                      <th>Payslip</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </a>
                          <a href="profile.html">
                            John Doe <span>Web Designer</span>
                          </a>
                        </h2>
                      </td>
                      <td>FT-0001</td>
                      <td>johndoe@example.com</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href=""
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Web Designer{' '}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Software Engineer
                            </a>
                            <a className="dropdown-item" href="#">
                              Software Tester
                            </a>
                            <a className="dropdown-item" href="#">
                              Frontend Developer
                            </a>
                            <a className="dropdown-item" href="#">
                              UI/UX Developer
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>$59698</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">
                              more_vert
                            </i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i>{' '}
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i>{' '}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-09.jpg"
                              alt=""
                            />
                          </a>
                          <a href="profile.html">
                            Richard Miles <span>Web Developer</span>
                          </a>
                        </h2>
                      </td>
                      <td>FT-0002</td>
                      <td>richardmiles@example.com</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href=""
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Web Developer{' '}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Software Engineer
                            </a>
                            <a className="dropdown-item" href="#">
                              Software Tester
                            </a>
                            <a className="dropdown-item" href="#">
                              Frontend Developer
                            </a>
                            <a className="dropdown-item" href="#">
                              UI/UX Developer
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>$72000</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">
                              more_vert
                            </i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i>{' '}
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i>{' '}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-10.jpg"
                              alt=""
                            />
                          </a>
                          <a href="profile.html">
                            John Smith <span>Android Developer</span>
                          </a>
                        </h2>
                      </td>
                      <td>FT-0003</td>
                      <td>johnsmith@example.com</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href=""
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Android Developer{' '}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Software Engineer
                            </a>
                            <a className="dropdown-item" href="#">
                              Software Tester
                            </a>
                            <a className="dropdown-item" href="#">
                              Frontend Developer
                            </a>
                            <a className="dropdown-item" href="#">
                              UI/UX Developer
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>$48200</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">
                              more_vert
                            </i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i>{' '}
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i>{' '}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-05.jpg"
                              alt=""
                            />
                          </a>
                          <a href="profile.html">
                            Mike Litorus <span>IOS Developer</span>
                          </a>
                        </h2>
                      </td>
                      <td>FT-0004</td>
                      <td>mikelitorus@example.com</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href=""
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            IOS Developer{' '}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Software Engineer
                            </a>
                            <a className="dropdown-item" href="#">
                              Software Tester
                            </a>
                            <a className="dropdown-item" href="#">
                              Frontend Developer
                            </a>
                            <a className="dropdown-item" href="#">
                              UI/UX Developer
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>$59698</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">
                              more_vert
                            </i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i>{' '}
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i>{' '}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-11.jpg"
                              alt=""
                            />
                          </a>
                          <a href="profile.html">
                            Wilmer Deluna <span>Team Leader</span>
                          </a>
                        </h2>
                      </td>
                      <td>FT-0005</td>
                      <td>wilmerdeluna@example.com</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href=""
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Team Leader{' '}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Software Engineer
                            </a>
                            <a className="dropdown-item" href="#">
                              Software Tester
                            </a>
                            <a className="dropdown-item" href="#">
                              Frontend Developer
                            </a>
                            <a className="dropdown-item" href="#">
                              UI/UX Developer
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>$43000</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">
                              more_vert
                            </i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i>{' '}
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i>{' '}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-12.jpg"
                              alt=""
                            />
                          </a>
                          <a href="profile.html">
                            Jeffrey Warden <span>Web Developer</span>
                          </a>
                        </h2>
                      </td>
                      <td>FT-0006</td>
                      <td>jeffreywarden@example.com</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href=""
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Web Developer
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Software Engineer
                            </a>
                            <a className="dropdown-item" href="#">
                              Software Tester
                            </a>
                            <a className="dropdown-item" href="#">
                              Frontend Developer
                            </a>
                            <a className="dropdown-item" href="#">
                              UI/UX Developer
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>$45000</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">
                              more_vert
                            </i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i>{' '}
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i>{' '}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-13.jpg"
                              alt=""
                            />
                          </a>
                          <a href="profile.html">
                            Bernardo Galaviz <span>Web Developer</span>
                          </a>
                        </h2>
                      </td>
                      <td>FT-0007</td>
                      <td>bernardogalaviz@example.com</td>
                      <td>1 Jan 2014</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href=""
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Web Developer{' '}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Software Engineer
                            </a>
                            <a className="dropdown-item" href="#">
                              Software Tester
                            </a>
                            <a className="dropdown-item" href="#">
                              Frontend Developer
                            </a>
                            <a className="dropdown-item" href="#">
                              UI/UX Developer
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>$38400</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">
                              more_vert
                            </i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i>{' '}
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i>{' '}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-01.jpg"
                              alt=""
                            />
                          </a>
                          <a href="profile.html">
                            Lesley Grauer <span>Team Leader</span>
                          </a>
                        </h2>
                      </td>
                      <td>FT-0008</td>
                      <td>lesleygrauer@example.com</td>
                      <td>1 Jun 2015</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href=""
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Team Leader{' '}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Software Engineer
                            </a>
                            <a className="dropdown-item" href="#">
                              Software Tester
                            </a>
                            <a className="dropdown-item" href="#">
                              Frontend Developer
                            </a>
                            <a className="dropdown-item" href="#">
                              UI/UX Developer
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>$75500</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">
                              more_vert
                            </i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i>{' '}
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i>{' '}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-16.jpg"
                              alt=""
                            />
                          </a>
                          <a href="profile.html">
                            Jeffery Lalor <span>Team Leader</span>
                          </a>
                        </h2>
                      </td>
                      <td>FT-0009</td>
                      <td>jefferylalor@example.com</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href=""
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Team Leader{' '}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Software Engineer
                            </a>
                            <a className="dropdown-item" href="#">
                              Software Tester
                            </a>
                            <a className="dropdown-item" href="#">
                              Frontend Developer
                            </a>
                            <a className="dropdown-item" href="#">
                              UI/UX Developer
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>$73550</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">
                              more_vert
                            </i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i>{' '}
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i>{' '}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-04.jpg"
                              alt=""
                            />
                          </a>
                          <a href="profile.html">
                            Loren Gatlin <span>Android Developer</span>
                          </a>
                        </h2>
                      </td>
                      <td>FT-0010</td>
                      <td>lorengatlin@example.com</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href=""
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Android Developer{' '}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Software Engineer
                            </a>
                            <a className="dropdown-item" href="#">
                              Software Tester
                            </a>
                            <a className="dropdown-item" href="#">
                              Frontend Developer
                            </a>
                            <a className="dropdown-item" href="#">
                              UI/UX Developer
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>$55000</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">
                              more_vert
                            </i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i>{' '}
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i>{' '}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-03.jpg"
                              alt=""
                            />
                          </a>
                          <a href="profile.html">
                            Tarah Shropshire <span>Android Developer</span>
                          </a>
                        </h2>
                      </td>
                      <td>FT-0011</td>
                      <td>tarahshropshire@example.com</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href=""
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Android Developer{' '}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Software Engineer
                            </a>
                            <a className="dropdown-item" href="#">
                              Software Tester
                            </a>
                            <a className="dropdown-item" href="#">
                              Frontend Developer
                            </a>
                            <a className="dropdown-item" href="#">
                              UI/UX Developer
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>$92400</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">
                              more_vert
                            </i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i>{' '}
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i>{' '}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Add Salary Modal --> */}
        <div
          id="add_salary"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Staff Salary</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Select Staff</label>
                        <select className="select">
                          <option>John Doe</option>
                          <option>Richard Miles</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label>Net Salary</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <h4 className="text-primary">Earnings</h4>
                      <div className="form-group">
                        <label>Basic</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>DA(40%)</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>HRA(15%)</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Conveyance</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Allowance</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Medical Allowance</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Others</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="add-more">
                        <a href="#">
                          <i className="fa fa-plus-circle"></i> Add More
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="text-primary">Deductions</h4>
                      <div className="form-group">
                        <label>TDS</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>ESI</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>PF</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Leave</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Prof. Tax</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Labour Welfare</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Others</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="add-more">
                        <a href="#">
                          <i className="fa fa-plus-circle"></i> Add More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Edit Salary Modal --> */}
        <div
          id="edit_salary"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Staff Salary</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Select Staff</label>
                        <select className="select">
                          <option>John Doe</option>
                          <option>Richard Miles</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label>Net Salary</label>
                      <input
                        className="form-control"
                        type="text"
                        value="$4000"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <h4 className="text-primary">Earnings</h4>
                      <div className="form-group">
                        <label>Basic</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$6500"
                        />
                      </div>
                      <div className="form-group">
                        <label>DA(40%)</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$2000"
                        />
                      </div>
                      <div className="form-group">
                        <label>HRA(15%)</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$700"
                        />
                      </div>
                      <div className="form-group">
                        <label>Conveyance</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$70"
                        />
                      </div>
                      <div className="form-group">
                        <label>Allowance</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$30"
                        />
                      </div>
                      <div className="form-group">
                        <label>Medical Allowance</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$20"
                        />
                      </div>
                      <div className="form-group">
                        <label>Others</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="text-primary">Deductions</h4>
                      <div className="form-group">
                        <label>TDS</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$300"
                        />
                      </div>
                      <div className="form-group">
                        <label>ESI</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$20"
                        />
                      </div>
                      <div className="form-group">
                        <label>PF</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$20"
                        />
                      </div>
                      <div className="form-group">
                        <label>Leave</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$250"
                        />
                      </div>
                      <div className="form-group">
                        <label>Prof. Tax</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$110"
                        />
                      </div>
                      <div className="form-group">
                        <label>Labour Welfare</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$10"
                        />
                      </div>
                      <div className="form-group">
                        <label>Fund</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$40"
                        />
                      </div>
                      <div className="form-group">
                        <label>Others</label>
                        <input
                          className="form-control"
                          type="text"
                          value="$15"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Edit Salary Modal --></div> */}
        {/* <!-- Delete Salary Modal --> */}
        <div
          className="modal custom-modal fade"
          id="delete_salary"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Salary</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-primary continue-btn"
                      >
                        Delete
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="javascript:void(0);"
                        data-dismiss="modal"
                        className="btn btn-primary cancel-btn"
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Delete Salary Modal --> */}
      </div>
    )
  }
}
export default Payroll;
