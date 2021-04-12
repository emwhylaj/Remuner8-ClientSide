import React, { useState } from 'react';

const StatusDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="dropdown action-label text-center">
      <button
        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
        data-toggle="dropdown"
        aria-expanded="false"
        onClick={toggle}
      >
        <i className="fa fa-dot-circle-o text-success"></i> Approved
      </button>
      <div
        className={`dropdown-menu dropdown-menu-right z-index-dropdown ${
          dropdownOpen && `show`
        }`}
      >
        <button className="dropdown-item">
          <i className="fa fa-dot-circle-o text-purple"></i> New
        </button>
        <button className="dropdown-item">
          <i className="fa fa-dot-circle-o text-info"></i> Pending
        </button>
        <button
          className="dropdown-item"
          data-toggle="modal"
          data-target="#approve_leave"
        >
          <i className="fa fa-dot-circle-o text-success"></i> Approved
        </button>
        <button className="dropdown-item">
          <i className="fa fa-dot-circle-o text-danger"></i> Declined
        </button>
      </div>
    </div>
  );
};

export default StatusDropdown;
