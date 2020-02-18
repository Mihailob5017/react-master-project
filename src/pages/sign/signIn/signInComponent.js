/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
//  Components
import FormInput from '../../../components/form-input/formInput';
import CustomButton from '../../../components/custom-button/customBtn';
import { signInWithGoogle } from '../../../firebase/FireBaseUtill';
import './signInComponent.scss';
const signInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email + ' ' + password);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    name === 'Email' ? setEmail(value) : setPassword(value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="Email"
          label="Email"
          value={email}
          handleChange={handleChange}
        />

        <FormInput
          type="password"
          name="Password"
          label="Password"
          value={password}
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default signInComponent;
