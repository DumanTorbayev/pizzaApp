import React, {lazy} from 'react'
import {Route, Switch} from 'react-router-dom'

const Home = lazy(() => import('../../pages/Home'))
const Menu = lazy(() => import('../../pages/Menu'))
const SignIn = lazy(() => import('../../pages/SignIn'))
const SignUp = lazy(() => import('../../pages/SignUp'))
const Orders = lazy(() => import('../../pages/Orders'))
const SignOut = lazy(() => import('../../pages/SignOut'))
const Cart = lazy(() => import('../../pages/Cart'))
const Checkout = lazy(() => import('../../pages/Checkout'))

export enum routes {
  home = '/',
  menu = '/menu',
  signIn = '/signin',
  signUp = '/signup',
  signOut = '/signout',
  orders = '/orders',
  cart = '/cart',
  checkout = '/checkout',
}

export const RootRoutes = () => {
  return (
    <Switch>
      <Route path={routes.home} exact={true} component={Home} />
      <Route path={routes.menu} exact={true} component={Menu} />
      <Route path={routes.signIn} exact={true} component={SignIn} />
      <Route path={routes.signUp} exact={true} component={SignUp} />
      <Route path={routes.orders} exact={true} component={Orders} />
      <Route path={routes.signOut} exact={true} component={SignOut} />
      <Route path={routes.cart} exact={true} component={Cart} />
      <Route path={routes.checkout} exact={true} component={Checkout} />
    </Switch>
  )
}
