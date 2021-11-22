import React, {lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import {PrivateRoute} from '../PrivateRoutes'

import {useTypedSelector} from '../../hooks/useTypedSelector'

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
  const {user} = useTypedSelector((state) => state.auth)

  return (
    <Switch>
      <PrivateRoute component={Orders} path={routes.orders} exact={true} />
      <PrivateRoute component={Checkout} path={routes.checkout} exact={true} />
      <PrivateRoute component={SignOut} path={routes.signOut} exact={true} />

      <Route path={routes.home} exact={true} component={Home} />
      <Route path={routes.menu} exact={true} component={Menu} />
      <Route path={routes.cart} exact={true} component={Cart} />

      <Route path={routes.signIn}>
        {user ? <Redirect to={routes.home} /> : <SignIn />}
      </Route>
      <Route path={routes.signUp}>
        {user ? <Redirect to={routes.home} /> : <SignUp />}
      </Route>
      <Route path="*">
        <Redirect to={user ? routes.home : routes.signIn} />
      </Route>
      <Redirect from="/" to={routes.home} />
    </Switch>
  )
}
