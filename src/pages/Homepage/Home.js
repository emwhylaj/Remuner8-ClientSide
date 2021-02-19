import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../custom.scss';
import '../../assets/scss/home.styles.scss';

import logo from '../../assets/img/brand/croppedcover.png';

export default class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="home bg-gradient-white pb-3">
        <header>
            <Link className="ml-6" to="/">
              <img src={logo} alt="Remuner8" width="150" />
            </Link>
        </header>

        <main className="mt-6">
          <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
            <div className="caption text-blue">
              <h1 className="caption-heading">
                REMUNER8 PAYROLL PORTAL
              </h1>
              <p className="caption-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nesciunt maiores, nostrum error enim dolor expedita adipisci obcaecati sunt magni, quaerat voluptate dolores suscipit illo odio a, delectus exercitationem voluptatem.
              </p>
              <div className="caption-buttons d-flex w-50 mt-5">
                <Link className="btn btn-outline-primary btn-login" to="/login">
                  LOGIN
                </Link>
                <Link to="/register" className="btn btn-primary btn-register ml-5">
                  REGISTER
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
