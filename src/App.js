import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component'
import Header from './components/header/header.component'

import {selectCurrentUser} from './redux/user/user-selectors';
import {createStructuredSelector} from 'reselect'

import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends Component {

  unsubscribeFromAuth = null;


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage /> } />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps,null )(App);
