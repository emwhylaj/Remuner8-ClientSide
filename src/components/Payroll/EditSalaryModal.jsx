import React, { Component } from 'react'

export default class EditSalaryModal extends Component {
  render() {
    return (
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
                    <input className="form-control" type="text" value="$4000" />
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
                      <input className="form-control" type="text" value="$70" />
                    </div>
                    <div className="form-group">
                      <label>Allowance</label>
                      <input className="form-control" type="text" value="$30" />
                    </div>
                    <div className="form-group">
                      <label>Medical Allowance</label>
                      <input className="form-control" type="text" value="$20" />
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
                      <input className="form-control" type="text" value="$20" />
                    </div>
                    <div className="form-group">
                      <label>PF</label>
                      <input className="form-control" type="text" value="$20" />
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
                      <input className="form-control" type="text" value="$10" />
                    </div>
                    <div className="form-group">
                      <label>Fund</label>
                      <input className="form-control" type="text" value="$40" />
                    </div>
                    <div className="form-group">
                      <label>Others</label>
                      <input className="form-control" type="text" value="$15" />
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
    )
  }
}
