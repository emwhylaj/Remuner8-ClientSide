import React, { Component } from 'react'

export default class EmployeeNameInput extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <input type="text" className="form-control" />
              <label className="focus-label">Employee Name</label>
            </div>
          </div>
        )
    }
}
