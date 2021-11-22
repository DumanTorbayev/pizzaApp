import {call, put, takeEvery} from 'redux-saga/effects'
import {PayloadAction} from '@reduxjs/toolkit'

import {addAddress, fetchAddress} from '../../api/address'

import {
  getAddress,
  getAddressFail,
  getAddressSuccess,
  setAddress,
  setAddressFail,
  setAddressSuccess,
} from './slice'
import {IUser} from '../../types/user'
import {IError} from '../../types/errors'
import {IAddAddress, IAddress} from '../../types/address'

function* getAddressWorker(action: PayloadAction<IUser>) {
  try {
    const response: IAddress = yield call(fetchAddress, action.payload)

    if (response) {
      yield put(getAddressSuccess(response))
    } else {
      yield put(getAddressFail('Address not found'))
    }
  } catch (e) {
    const error = e as IError
    yield put(getAddressFail(error.message))
  }
}

function* setAddressWorker(action: PayloadAction<IAddAddress>) {
  try {
    const response: IAddress | string = yield call(addAddress, action.payload)

    if (!response) {
      yield put(setAddressSuccess(action.payload.address))
    } else {
      yield put(setAddressFail('Something went wrong'))
    }
  } catch (e) {
    const error = e as IError
    yield put(setAddressFail(error.message))
  }
}

export function* addressWatcher() {
  yield takeEvery(getAddress.type, getAddressWorker)
  yield takeEvery(setAddress.type, setAddressWorker)
}
