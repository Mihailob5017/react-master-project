import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink
} from './Header.style';

import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/cartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cartIcon';
import { auth } from '../../firebase/FireBaseUtill';
import { selectCartHidden } from '../../redux/cart/cartSelector';
import { currUserSelector } from '../../redux/user/userSelect';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
        ) : (
          <OptionLink to="/sign">Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};
const mapStatetoProps = createStructuredSelector({
  currentUser: currUserSelector,
  hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);
