import React from 'react';

const SelectJobDescription = props => {
  return (
    <>
      <select
        className="select select2-hidden-accessible"
        data-select2-id="19"
        tabindex="-1"
        aria-hidden="true"
      >
        <option data-select2-id="21">Select Designation</option>
        <option data-select2-id="39">Web Designer</option>
        <option data-select2-id="40">Web Developer</option>
        <option data-select2-id="41">Android Developer</option>
      </select>
      <span
        className="select2 select2-container select2-container--default select2-container--below"
        dir="ltr"
        data-select2-id="20"
        style={{ width: 100 }}
      >
        <span className="selection">
          <span
            className="select2-selection select2-selection--single"
            aria-haspopup="true"
            aria-expanded="false"
            tabindex="0"
            aria-labelledby="select2-vvus-container"
          >
            <span
              className="select2-selection__rendered"
              id="select2-vvus-container"
              role="textbox"
              aria-readonly="true"
              title="Select Designation"
            >
              Select Designation
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
};

export default SelectJobDescription;
