import {call, put, takeEvery} from 'redux-saga/effects'
import {AxiosResponse} from 'axios'

import {fetchMenu} from '../../api/menu'

import {setError, setMenu, setMenuSuccess} from './slice'
import {IError} from '../../types/errors'
import {IMenu} from '../../types/menu'

function* menuWorker() {
  try {
    const response: AxiosResponse<IMenu[]> = yield call(fetchMenu)

    const withQuantity = response.data.map((data) => {
      data.quantity = 0
      return data
    })

    yield put(setMenuSuccess(withQuantity))
  } catch (e) {
    const error = e as IError
    yield put(setError(error.message))
  }
}

export function* menuWatcher() {
  yield takeEvery(setMenu.type, menuWorker)
}
