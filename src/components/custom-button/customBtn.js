import React from 'react';
import './custom-button.scss';
const customBtn = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default customBtn;
