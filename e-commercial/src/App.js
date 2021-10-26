import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './components/Pages/HomePage';

const HatPage = () => (
  <div>
    <h1>HAT PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatPage} />
    </div>
  );
}

export default App;
