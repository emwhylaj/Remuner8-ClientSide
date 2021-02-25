import React, { Component } from 'react'
import Header from './Header'
import EmployeeNameInput from './EmployeeNameInput'
import Role from './Role'
import LeaveStatus from './LeaveStatus'
import InputDateFrom from './InputDateFrom'
import InputDateTo from './InputDateTo'
import Search from './Search'
import ShowInput from './ShowInput'
import TableHead from './TableHead'
import AddSalaryModal from './AddSalaryModal';

import './Payroll.css'
class Payroll extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }

  toggleModal(){
    this.setState({ modalIsOpen: !this.state.modalIsOpen})
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="content container-fluid"> 
          <Header toggleModal={this.toggleModal} />
          <div className="row filter-row">
            <EmployeeNameInput />
            <Role />
            <LeaveStatus />
            <InputDateFrom />
            <InputDateTo />
            <Search />
          </div>
          <ShowInput />
          <div className="row">
            <TableHead />
          </div>
        </div>
        <AddSalaryModal isOpen={this.state.modalIsOpen} toggleModal={this.toggleModal} />
      </div>
    )
  }
}
export default Payroll
