import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './components/Pages/HomePage';
import ShopPage from './components/Pages/ShopPage';
import Header from './components/Header';

function App() {
  return (
    <div className="body">
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
