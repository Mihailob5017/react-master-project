import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
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
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/sign">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};
const mapStatetoProps = createStructuredSelector({
  currentUser: currUserSelector,
hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);
