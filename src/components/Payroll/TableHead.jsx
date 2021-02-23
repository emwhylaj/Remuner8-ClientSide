import React, { Component } from 'react'

export default class TableHead extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-12">
          <table
            className="table table-striped custom-table datatable dataTable no-footer"
            id="DataTables_Table_0"
            role="grid"
            aria-describedby="DataTables_Table_0_info"
          >
            <thead>
              <tr role="row">
                <th
                  className="sorting_asc"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-sort="ascending"
                  aria-label="Employee: activate to sort column descending"
                  style={{ width: '75.6667px' }}
                >
                  Employee
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Employee ID: activate to sort column ascending"
                  style={{ width: '53.3333px' }}
                >
                  Employee ID
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Email: activate to sort column ascending"
                  style={{ width: '136px' }}
                >
                  Email
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Join Date: activate to sort column ascending"
                  style={{ width: '24.6667px' }}
                >
                  Join Date
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Role: activate to sort column ascending"
                  style={{ width: '92.6667px' }}
                >
                  Role
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Salary: activate to sort column ascending"
                  style={{ width: '34px' }}
                >
                  Salary
                </th>
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Payslip: activate to sort column ascending"
                  style={{ width: '40px' }}
                >
                  Payslip
                </th>
                <th
                  className="text-right sorting"
                  tabIndex="0"
                  aria-controls="DataTables_Table_0"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Action: activate to sort column ascending"
                  style={{ width: '99px' }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr role="row" className="odd">
                <td className="sorting_1">
                  <h2 className="table-avatar">
                    <a href="/" className="avatar">
                      <img src="assets/img/profiles/avatar-13.jpg" alt="" />
                    </a>
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
                      <a className="dropdown-item" href="/">
                        Software Engineer
                      </a>
                      <a className="dropdown-item" href="#/">
                        Software Tester
                      </a>
                      <a className="dropdown-item" href="/">
                        Frontend Developer
                      </a>
                      <a className="dropdown-item" href="/">
                        UI/UX Developer
                      </a>
                    </div>
                  </div>
                </td>
                <td>$38400</td>
                <td>
                  <a className="btn btn-sm btn-primary" href="/">
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
    )
  }
}
