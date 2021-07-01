import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
    <button type="button" class="btn btn-primary" onClick={() => props.history.push('/')}>Homepage</button>
  </div>
)


function App() {
  return (
    <div>
     
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/shop' component={ShopPage} />
     
    </div>
  );
}

export default App;
