import {combineReducers} from '@reduxjs/toolkit'
import {all} from 'redux-saga/effects'
import {auth, authActions, authWatcher} from './auth'
import {menu, menuActions, menuWatcher} from './menu'
import {cart, cartActions} from './cart'

export const allActionCreators = {
  ...authActions,
  ...menuActions,
  ...cartActions,
}

export const rootReducer = combineReducers({
  auth,
  menu,
  cart,
})
export type RootState = ReturnType<typeof rootReducer>

export function* rootWatcher() {
  yield all([authWatcher(), menuWatcher()])
}
