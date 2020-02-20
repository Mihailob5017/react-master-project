import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//  Import Css
import './App.css';
//  Firebase
import { auth, createUserProfileDoc } from './firebase/FireBaseUtill';
//  Import Components
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopComponent';
import Header from './components/header/Header';
import signComponent from './pages/sign/signComponent';
import { setCurrentUser } from './redux/user/userAction';
const App = ({ setCurrentUser }) => {
  let unsubScribeFromAuth = null;
  useEffect(
    () =>
      // eslint-disable-next-line react-hooks/exhaustive-deps
      (unsubScribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDoc(userAuth);
          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        } else {
          setCurrentUser(null);
        }

        setCurrentUser(userAuth);
        return () => {
          unsubScribeFromAuth();
        };
      })),
    []
  );

  return (
    <Router>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/sign" component={signComponent} />
    </Router>
  );
};
const mapDispachToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispachToProps)(App);
