/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { connect } from 'react-redux';
//  Components
import FormInput from '../../../components/form-input/formInput';
import CustomButton from '../../../components/custom-button/customBtn';
import {
  googleSignInStart,
  emailSignInStart
} from '../../../redux/user/userAction';
import {
  SignInContainer,
  ButtonsContianer,
  TitleContaienr
} from './signInComponents.styles';
const signInComponent = ({ googleSignInStart, emailSignInStart }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart(email, password);
    setEmail('');
    setPassword('');
  }; 
  const handleChange = e => {
    const { name, value } = e.target;
    name === 'Email' ? setEmail(value) : setPassword(value);
  };

  return (
    <SignInContainer>
      <TitleContaienr>I already have an account</TitleContaienr>
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
        <ButtonsContianer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContianer>
      </form>
    </SignInContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});
export default connect(null, mapDispatchToProps)(signInComponent);
