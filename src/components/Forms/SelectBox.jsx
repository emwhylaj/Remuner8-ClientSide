import React from 'react';

const SelectBox = ({ className, options, children }) => {
  return (
    <div className="form-group form-focus select-focus">
      <select
        className={`select select2-hidden-accessible ${className}`}
        data-select2-id="1"
        tabIndex="-1"
        aria-hidden="true"
      >
        <option>{children}</option>
        {options.sort().map((option, index) => (
          <option value={option} key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
