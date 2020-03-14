import React from 'react';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './formInput.styles';
const formInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label && (
        <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default formInput;
