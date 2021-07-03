import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
    <button type="button" class="btn btn-primary" onClick={() => props.history.push('/')}>Homepage</button>
  </div>
)


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/hats' component={HatsPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={SignInAndSignUpPage}/>
        </switch>
      </div>
    );

  }

}

export default App;
