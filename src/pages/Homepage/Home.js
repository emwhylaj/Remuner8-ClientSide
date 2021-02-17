import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1 className="heading">Hello, world!</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
