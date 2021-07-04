import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth, creatUserProfileDocument} from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {//if it's logged in
        const userRef = await creatUserProfileDocument(userAuth);//it gets the userRef of a new or old user
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
        this.setState({ currentUser: userAuth});//if userAuth is not logged in it will set the current user to null 

    });
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
