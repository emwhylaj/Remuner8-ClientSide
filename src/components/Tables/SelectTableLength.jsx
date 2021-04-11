import React from 'react';

const SelectTableLength = ({ togglePageSize }) => (
  <div>
    <select
      className="w-auto mx-2 custom-select text-darker"
      onChange={e => togglePageSize(e.target.value)}
    >
      <option value="10">10 / page </option>
      <option value="25">25 / page </option>
      <option value="50">50 / page </option>
      <option value="100">100 / page </option>
    </select>
  </div>
);

export default SelectTableLength;
