import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth, creatUserProfileDocument} from './firebase/firebase.utils';
import CheckOutPage from './pages/checkout/checkout.component';

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
    <button type="button" class="btn btn-primary" onClick={() => props.history.push('/')}>Homepage</button>
  </div>
)


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {//if it's logged in
        const userRef = await creatUserProfileDocument(userAuth);//it gets the userRef of a new or old user
        
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
        this.props.setCurrentUser(userAuth);//if userAuth is not logged in it will set the current user to null 

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/hats' component={HatsPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/sign-in' 
                 render ={() =>
                  this.props.currentUser 
                    ? 
                    (<Redirect to ='/' />) //if currentUser is logged in doesn't allow to access SignInAndSignUpPage
                    : 
                    (<SignInAndSignUpPage />)
                 }
                 />
        </switch>
      </div>
    );

  }

}
/* 
const mapStateToProps = state => ({//state is the Rootreducer
  currentUser: state.user.currentUser
});  */

//using selectors
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, //first argument can be set as null if there is no need to retrieve the state
  mapDispatchToProps)(App);//second argument only SET the state
