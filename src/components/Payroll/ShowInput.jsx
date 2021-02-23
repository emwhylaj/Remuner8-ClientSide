import React, { Component } from 'react'

export default class ShowImput extends Component {
    render() {
        return (
            <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="dataTables_length" id="DataTables_Table_0_length">
                <label>
                  Show{' '}
                  <select
                    name="DataTables_Table_0_length"
                    aria-controls="DataTables_Table_0"
                    class="custom-select custom-select-sm form-control form-control-sm"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>{' '}
                  entries
                </label>
              </div>
            </div>
            <div class="col-sm-12 col-md-6"></div>
          </div>
        )
    }
}
