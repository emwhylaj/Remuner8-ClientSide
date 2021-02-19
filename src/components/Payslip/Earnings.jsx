import React from 'react';

const Earnings = () => (
    <div className="col-sm-6">
      <div>
        <h4 className="m-b-10">
          <strong>Earnings</strong>
        </h4>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <strong>Basic Salary</strong>{' '}
                <span className="float-right">N6500</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>House Rent Allowance (H.R.A.)</strong>{' '}
                <span className="float-right">N55</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Conveyance</strong>{' '}
                <span className="float-right">N55</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Other Allowance</strong>{' '}
                <span className="float-right">N55</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Total Earnings</strong>{' '}
                <span className="float-right">
                  <strong>N55</strong>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
);

export default Earnings;
