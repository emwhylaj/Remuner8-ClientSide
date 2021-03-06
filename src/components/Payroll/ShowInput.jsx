import React, { Component } from 'react';

export default class ShowInput extends Component {
  render() {
    return (
      <div className="row my-3">
        <div className="col-sm-12 col-md-6">
          <div className="row dataTables_length justify-content-center" id="DataTables_Table_0_length">
            <div className="col-1">
              <label>Show</label>
            </div>
            <div className="col-3">
              <select
                name="DataTables_Table_0_length"
                aria-controls="DataTables_Table_0"
                className="custom-select custom-select-sm form-control form-control-sm"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="col-1">
              <label>entries</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
