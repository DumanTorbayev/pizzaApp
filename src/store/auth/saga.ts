import {call, put, takeEvery} from 'redux-saga/effects'
import {PayloadAction} from '@reduxjs/toolkit'

import {authorization, registration} from '../../api/authorization'

import {
  setEmailAuth,
  setError,
  setRegister,
  setRegisterFail,
  setRegisterSuccess,
} from './slice'
import {IAuthorization} from '../../types/auth'
import {IError} from '../../types/errors'

function* authWorker(action: PayloadAction<IAuthorization>) {
  try {
    yield call(authorization, action.payload)
  } catch (e) {
    const error = e as IError
    yield put(setError(error.message))
  }
}

function* registerWorker(action: PayloadAction<IAuthorization>) {
  try {
    yield call(registration, action.payload)
    yield put(setRegisterSuccess())
  } catch (e) {
    const error = e as IError
    yield put(setRegisterFail(error.message))
  }
}

export function* authWatcher() {
  yield takeEvery(setEmailAuth.type, authWorker)
  yield takeEvery(setRegister.type, registerWorker)
}
