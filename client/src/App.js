import React, { useEffect, lazy, Suspense } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Spinner from './components/spinner/spinner.component';

import Header from './components/header/header.component'

import {selectCurrentUser} from './redux/user/user-selectors';
import {checkUserSession} from './redux/user/user-actions'
import {createStructuredSelector} from 'reselect'

import GlobalStyle from './global.styles'

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))


function App({checkUserSession, currentUser}) {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={Spinner}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" render={() => currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage /> } />
          <Route path="/checkout" component={Checkout} />
        </Suspense>
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps )(App);
