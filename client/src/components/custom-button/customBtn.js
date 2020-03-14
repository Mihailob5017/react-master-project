import React from 'react';
import { CustomButtonContainer } from './customButton.styles';
const customBtn = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default customBtn;
