import React, { Children } from 'react';

import './styles.css';

const Select = ({
  name,
  label,
  containerClassName = '',
  selectClassName = '',
  children,
  ...props
}) => (
  <div className={`${containerClassName} select-container`}>
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <select className={`${selectClassName} select`} {...props} name={name}>
      {children}
    </select>
  </div>
);

export default Select;
