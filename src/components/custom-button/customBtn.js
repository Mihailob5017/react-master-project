import React from 'react';
import './custom-button.scss';
const customBtn = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default customBtn;
