import React from 'react';
import { SignComponent } from './signComponent.styles';
import SignInComponent from './signIn/signInComponent';
import SignUpComponent from './signUp/signUp';

const signComponent = () => {
  return (
    <SignComponent>
      <SignInComponent />
      <SignUpComponent />
    </SignComponent>
  );
};

export default signComponent;
