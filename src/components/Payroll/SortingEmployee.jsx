import React, { Component } from 'react'

export default class SortingEmployee extends Component {
    render() {
        return (
            <div>
                 <th
                      className="sorting_asc"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-sort="ascending"
                      aria-label="Employee: activate to sort column descending"
                      style={{width: "75.6667px;"}}
                    >
                      Employee
                    </th>
            </div>
        )
    }
}
