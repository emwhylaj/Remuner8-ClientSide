import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddSalaryModal = ({ toggleModal, isOpen }) => (
  <Modal
    isOpen={isOpen}
    className="modal-dialog modal-dialog-centered modal-lg"
    role="document"
  >
    <ModalHeader toggle={toggleModal}>Add Staff Salary</ModalHeader>
    <ModalBody className="modal-content">
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
        <ModalFooter className="submit-section">
          <Button color="primary">Submit</Button>
        </ModalFooter>
      </form>
    </ModalBody>
  </Modal>
);

export default AddSalaryModal;
