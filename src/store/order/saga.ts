import {call, put, takeEvery} from 'redux-saga/effects'
import {PayloadAction} from '@reduxjs/toolkit'

import {fetchOrders, setOrder} from '../../api/order'

import {
  getOrder,
  getOrderFail,
  getOrderSuccess,
  placeOrder,
  placeOrderFail,
  placeOrderSuccess,
} from './slice'
import {IError} from '../../types/errors'
import {IOrderData} from '../../types/order'

function* setOrderWorker(action: PayloadAction<IOrderData>) {
  try {
    const response: IOrderData = yield call(setOrder, action.payload)

    if (!response) {
      yield put(placeOrderSuccess())
    } else {
      yield put(placeOrderFail('Something went wrong'))
    }
  } catch (e) {
    const error = e as IError
    yield put(placeOrderFail(error.message))
  }
}

function* getOrderWorker(action: PayloadAction<string>) {
  try {
    const response: IOrderData[] = yield call(fetchOrders, action.payload)

    yield put(getOrderSuccess(response))
  } catch (e) {
    const error = e as IError
    yield put(getOrderFail(error.message))
  }
}

export function* orderWatcher() {
  yield takeEvery(placeOrder.type, setOrderWorker)
  yield takeEvery(getOrder.type, getOrderWorker)
}
