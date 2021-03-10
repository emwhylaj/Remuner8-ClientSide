import React from 'react'

const SelectBox = (props) => {
    return (
      <>
        <select
          className="select select2-hidden-accessible"
          data-select2-id="16"
          tabindex="-1"
          aria-hidden="true"
        >
          <option data-select2-id="18">Select Department</option>
          <option>Web Development</option>
          <option>IT Management</option>
          <option>Marketing</option>
        </select>
        <span
          className="select2 select2-container select2-container--default"
          dir="ltr"
          data-select2-id="17"
          style={{ width: '100%' }}
        >
          <span className="selection">
            <span
              className="select2-selection select2-selection--single"
              role="combobox"
              aria-controls="select"
              aria-haspopup="true"
              aria-expanded="false"
              tabindex="0"
              aria-labelledby="select2-kokx-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-kokx-container"
                role="textbox"
                aria-readonly="true"
                title="Select Department"
              >
                Select Department
              </span>
              <span className="select2-selection__arrow" role="presentation">
                <b role="presentation"></b>
              </span>
            </span>
          </span>
          <span className="dropdown-wrapper" aria-hidden="true"></span>
        </span>
      </>
    );
}

export default SelectBox
