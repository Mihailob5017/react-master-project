import React from 'react';
import './signComponent.scss';
import SignInComponent from './signIn/signInComponent';
import SignUpComponent from './signUp/signUp';

const signComponent = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignInComponent />
      <SignUpComponent />
    </div>
  );
};

export default signComponent;
