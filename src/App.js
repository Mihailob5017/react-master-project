import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//  Import Css
import './App.css';
//  Import Components
import Homepage from './pages/homepage/Homepage';
const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
    </Router>
  );
};

export default App;
