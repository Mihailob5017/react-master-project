import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//  Import Css
import './App.css';

//  Import Components
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopComponent';
import Header from './components/header/Header';
import SignComponent from './pages/sign/signComponent';
import { setCurrentUser } from './redux/user/userAction';
import { createStructuredSelector } from 'reselect';
import { currUserSelector } from './redux/user/userSelect';
import { checkUserSession } from './redux/user/userAction';
import Checkout from './pages/checkout/checkout';
const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <Router>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
      <Route exact path="/checkout" component={Checkout} />
      <Route
        path="/sign"
        render={() => (currentUser ? <Redirect to="/" /> : <SignComponent />)}
      />
    </Router>
  );
};
const mapDispachToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession())
});
const mapStateToProps = createStructuredSelector({
  currentUser: currUserSelector
});
export default connect(mapStateToProps, mapDispachToProps)(App);
