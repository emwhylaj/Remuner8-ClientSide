import React, { Component } from 'react'

export default class LeaveStatus extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <select className="select">
                <option> -- Select -- </option>
                <option> Pending </option>
                <option> Approved </option>
                <option> Rejected </option>
              </select>
              <label className="focus-label">Leave Status</label>
            </div>
          </div>
        )
    }
}
