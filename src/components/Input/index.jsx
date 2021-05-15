import React from 'react';

import './styles.css';

const Input = ({ name, label, className = '', ...props }) => (
  <div className="input-container">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <input className={`${className} input`} {...props} name={name} />
  </div>
);

export default Input;
