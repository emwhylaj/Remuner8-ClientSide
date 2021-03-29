import React from 'react';

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="form-group form-focus">
      <input className="form-control" {...otherProps} />
      {label && <label className="focus-label">{label}</label>}
    </div>
  );
};

export default FormInput;
