import {call, put, takeEvery} from 'redux-saga/effects'
import {
  getOrder,
  getOrderFail,
  getOrderSuccess,
  placeOrder,
  placeOrderFail,
  placeOrderSuccess,
} from './slice'
import {errorType} from '../../types/errors'
import {PayloadAction} from '@reduxjs/toolkit'
import {OrderDataTypes} from '../../types/order'
import {fetchOrders, setOrder} from '../../api/order'

function* setOrderWorker(action: PayloadAction<OrderDataTypes>) {
  try {
    const response: OrderDataTypes = yield call(setOrder, action.payload)

    if (!response) {
      yield put(placeOrderSuccess())
    } else {
      yield put(placeOrderFail('Something went wrong'))
    }
  } catch (e) {
    const error = e as errorType
    yield put(placeOrderFail(error.message))
  }
}

function* getOrderWorker(action: PayloadAction<string>) {
  try {
    const response: OrderDataTypes[] = yield call(fetchOrders, action.payload)

    yield put(getOrderSuccess(response))
  } catch (e) {
    const error = e as errorType
    yield put(getOrderFail(error.message))
  }
}

export function* orderWatcher() {
  yield takeEvery(placeOrder.type, setOrderWorker)
  yield takeEvery(getOrder.type, getOrderWorker)
}
