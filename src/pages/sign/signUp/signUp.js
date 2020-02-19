/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import './signup.scss';
//  Components
import FormInput from '../../../components/form-input/formInput';
import CustomButton from '../../../components/custom-button/customBtn';
import { auth, createUserProfileDoc } from '../../../firebase/FireBaseUtill';

const signUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [passsword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (passsword !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        passsword
      );
      await createUserProfileDoc(user, { displayName });
    } catch (error) {
      console.error(error);
    }

    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'displayName':
        setDisplayName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <div className="sign-up" onSubmit={handleSubmit}>
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={passsword}
          label="Password"
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          required
          value={confirmPassword}
          onChange={handleChange}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default signUp;
