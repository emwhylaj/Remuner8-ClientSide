import React, { Component } from 'react';
import Logo from '../../assets/img/brand/croppedcover.png';

class Body extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h4 className="payslip-title">
                Payslip for the month of Jan 2021
              </h4>
              <div className="row">
                <div className="col-sm-6 m-b-20">
                  <img
                    src={Logo}
                    className="inv-logo"
                    alt="Remuner8"
                    width="150"
                  />
                  <ul className="list-unstyled mb-0">
                    <li>Remuner8</li>
                    <li>39 Ikorodu Road,</li>
                    <li>Jibowu, Yaba, Lagos, Nigeria</li>
                  </ul>
                </div>
                <div className="col-sm-6 m-b-20">
                  <div className="invoice-details">
                    <h3 className="text-uppercase">Payslip #49029</h3>
                    <ul className="list-unstyled">
                      <li>
                        Salary Month: <span>January, 2021</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
