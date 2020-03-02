/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { connect } from 'react-redux';
//  Components
import FormInput from '../../../components/form-input/formInput';
import CustomButton from '../../../components/custom-button/customBtn';
import { signInWithGoogle, auth } from '../../../firebase/FireBaseUtill';
import { googleSignInStart } from '../../../redux/user/userAction';
import {
  SignInContainer,
  ButtonsContianer,
  TitleContaienr
} from './signInComponents.styles';
const signInComponent = ({ googleSignInStart }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
    }
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
  googleSignInStart: () => dispatch(googleSignInStart())
});
export default connect(null, mapDispatchToProps)(signInComponent);
