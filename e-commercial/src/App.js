import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './components/Pages/HomePage';
import ShopPage from './components/Pages/ShopPage';
import SignInPage from './components/Pages/SignInPage';
import Header from './components/Header';

function App() {
  return (
    <div className="body">
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/sign-in' component={SignInPage} />
    </div>
  );
}

export default App;
