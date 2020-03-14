/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { SignUpContainer, TitleContainer } from './signUp.styles';
//  Components
import FormInput from '../../../components/form-input/formInput';
import CustomButton from '../../../components/custom-button/customBtn';
import { signUpStart } from '../../../redux/user/userAction';
import { connect } from 'react-redux';

const signUp = ({ signUpStart }) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }
    signUpStart({ email, displayName, password });
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
    <SignUpContainer onSubmit={handleSubmit}>
      <TitleContainer>I do not have a account</TitleContainer>
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
          value={password}
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
    </SignUpContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  signUpStart: object => dispatch(signUpStart(object))
});
export default connect(null, mapDispatchToProps)(signUp);
