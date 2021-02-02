import React, { Component } from "react";
import Navbar from "./Navbar";

export default class AdminDashboard extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Navbar />
        <h1>Hello World from Admin</h1>
        <p>Hi from landing page</p>
      </div>
    );
  }
}
