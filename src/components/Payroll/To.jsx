import React, { Component } from 'react'

export default class To extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus">
                <div className="cal-icon">
                  <input
                    className="form-control  datetimepicker"
                    type="text"
                  />
                </div>
                <label className="focus-label">To</label>
              </div>
            </div>
        )
    }
}
