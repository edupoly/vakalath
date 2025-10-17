import React from 'react';
import "./style.css";

function FloatingInput({ type = 'text', id, name, value, onChange, label, ...rest }) {
  return (
    <div className="form-group col position-relative mb-3">
      <input
        type={type}
        className="form-input"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        {...rest}
      />
      <label htmlFor={id} className="ms-3 form-label">
        {label}
      </label>
    </div>
  );
}

export default FloatingInput;
