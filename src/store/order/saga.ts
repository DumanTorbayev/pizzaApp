import {call, put, takeEvery} from 'redux-saga/effects'
import {placeOrderFail, placeOrderInit, placeOrderSuccess} from './slice'
import {errorType} from '../../types/errors'
import {PayloadAction} from '@reduxjs/toolkit'
import {OrderDataTypes} from '../../types/order'
import {setOrder} from '../../api/order'
import {AxiosResponse} from 'axios'

function* setOrderWorker(action: PayloadAction<OrderDataTypes>) {
  try {
    const response: AxiosResponse<OrderDataTypes> = yield call(
      setOrder,
      action.payload
    )

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

export function* orderWatcher() {
  yield takeEvery(placeOrderInit.type, setOrderWorker)
}
