import React, { Component } from "react";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "Admin",
    };
  }
  
  render() {
    return (
      <>
        {this.state.role === "Admin" ? (
          <AdminDashboard />
        ) : (
          <EmployeeDashboard />
        )}
      </>
    );
  }
}
