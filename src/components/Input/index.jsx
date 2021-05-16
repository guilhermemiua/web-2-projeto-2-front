import React from 'react';

import './styles.css';

const Input = ({
  name,
  label,
  containerClassName = '',
  inputClassName = '',
  ...props
}) => (
  <div className={`${containerClassName} input-container`}>
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <input className={`${inputClassName} input`} {...props} name={name} />
  </div>
);

export default Input;
