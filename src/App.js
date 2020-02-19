import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//  Import Css
import './App.css';
//  Firebase
import { auth, createUserProfileDoc } from './firebase/FireBaseUtill';
//  Import Components
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopComponent';
import Header from './components/header/Header';
import signComponent from './pages/sign/signComponent';
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

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
      <Header currentUser={currentUser} />
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/sign" component={signComponent} />
    </Router>
  );
};

export default App;
