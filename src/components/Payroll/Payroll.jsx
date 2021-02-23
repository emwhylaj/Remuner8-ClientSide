import React, { Component } from 'react'
import './Payroll.css'
import Header from './Header'
import EmployeeNameInput from './EmployeeNameInput'
import Role from './Role'
import LeaveStatus from './LeaveStatus'
import InputDateFrom from './InputDateFrom'
import InputDateTo from './InputDateTo'
import Search from './Search'
import ShowInput from './ShowInput'
import SortingEmployee from './SortingEmployee'

class Payroll extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Header />
          <div className="row filter-row">
            <EmployeeNameInput />
            <Role />
            <LeaveStatus />
            <InputDateFrom />
            <InputDateTo />
            <Search />
          </div>
          <ShowInput />
          <div className="row">
            <div className="col-sm-12">
              <table
                className="table table-striped custom-table datatable dataTable no-footer"
                id="DataTables_Table_0"
                role="grid"
                aria-describedby="DataTables_Table_0_info"
              >
                <thead>
                  <tr role="row">
                   <SortingEmployee/>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Employee ID: activate to sort column ascending"
                      style={{width: "53.3333px;"}}
                    >
                      Employee ID
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Email: activate to sort column ascending"
                      style={{width: "136px;"}}
                    >
                      Email
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Join Date: activate to sort column ascending"
                      style={{width: "24.6667px;"}}
                    >
                      Join Date
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Role: activate to sort column ascending"
                      style={{width: "92.6667px;"}}
                    >
                      Role
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Salary: activate to sort column ascending"
                      style={{width: "34px;"}}
                    >
                      Salary
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Payslip: activate to sort column ascending"
                      style={{width: "40px;"}}
                    >
                      Payslip
                    </th>
                    <th
                      className="text-right sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Action: activate to sort column ascending"
                      style={{width: "99px;"}}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <h2 className="table-avatar">
                        <a href="profile.html" className="avatar">
                          <img
                            src="assets/img/profiles/avatar-13.jpg"
                            alt=""
                          /></a>
                          <a href="/">
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
                            href="/"
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
                          href="/"
                        >
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="/"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="/"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="/"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-sm-12">
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
                        <a className="btn btn-sm btn-primary" href="">
                          Generate Slip
                        </a>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#edit_salary"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#delete_salary"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
        </div>
        {/* <!-- Add Salary Modal --> */}
        <div id="add_salary" className="modal custom-modal fade" role="dialog">
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
        <div id="edit_salary" className="modal custom-modal fade" role="dialog">
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
                    <button className="btn btn-primary submit-btn">Save</button>
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
                <div classNamee="modal-btn delete-action">
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
export default Payroll
