import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//  Import Css
import './App.css';
//  Import Components
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopComponent';
import Header from './components/header/Header';
const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </Router>
  );
};

export default App;
