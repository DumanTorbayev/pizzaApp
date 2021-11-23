import React, {lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

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
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.menu} element={<Menu />} />
      <Route path={routes.signIn} element={<SignIn />} />
      <Route path={routes.signUp} element={<SignUp />} />
      <Route path={routes.orders} element={<Orders />} />
      <Route path={routes.signOut} element={<SignOut />} />
      <Route path={routes.cart} element={<Cart />} />
      <Route path={routes.checkout} element={<Checkout />} />
    </Routes>
  )
}
