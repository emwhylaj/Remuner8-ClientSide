import React, { Component } from "react";
import Navbar from "./Navbar";

export default class EmployeeDashboard extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Navbar />
        <h1>Hello from Employee</h1>
      </div>
    );
  }
}
