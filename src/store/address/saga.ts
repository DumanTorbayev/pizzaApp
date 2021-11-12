import {call, put, takeEvery} from 'redux-saga/effects'
import {
  getAddress,
  getAddressFail,
  getAddressSuccess,
  setAddress,
  setAddressFail,
  setAddressSuccess,
} from './slice'
import {PayloadAction} from '@reduxjs/toolkit'
import {UserType} from '../../types/user'
import {addAddress, fetchAddress} from '../../api/address'
import {errorType} from '../../types/errors'
import {AxiosResponse} from 'axios'
import {AddAddressTypes, AddressTypes} from '../../types/address'

function* getAddressWorker(action: PayloadAction<UserType>) {
  try {
    const response: AxiosResponse<AddressTypes> = yield call(
      fetchAddress,
      action.payload
    )

    if (response) {
      yield put(getAddressSuccess(response))
    } else {
      yield put(getAddressFail('Address not found'))
    }
  } catch (e) {
    const error = e as errorType
    yield put(getAddressFail(error.message))
  }
}

function* setAddressWorker(action: PayloadAction<AddAddressTypes>) {
  try {
    const response: AxiosResponse<AddressTypes | string> = yield call(
      addAddress,
      action.payload
    )

    if (!response) {
      yield put(setAddressSuccess(action.payload.address))
    } else {
      yield put(setAddressFail('Something went wrong'))
    }
  } catch (e) {
    const error = e as errorType
    yield put(setAddressFail(error.message))
  }
}

export function* addressWatcher() {
  yield takeEvery(getAddress.type, getAddressWorker)
  yield takeEvery(setAddress.type, setAddressWorker)
}
