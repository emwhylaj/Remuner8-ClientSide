import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class AddSalaryModal extends Component {
  render() {
    console.log(this.props);
    return (
      <Modal isOpen={this.props.isOpen} className="fade">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <ModalHeader>
              <h5 className="modal-title">Add Staff Salary</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.props.toggleModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </ModalHeader>
            <ModalBody>
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
                      <a href="/">
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
                      <a href="/">
                        <i className="fa fa-plus-circle"></i> Add More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </ModalBody>
          </div>
        </div>
      </Modal>
    )
  }
}
