import {call, put, takeEvery} from 'redux-saga/effects'
import {errorType} from '../../types/errors'
import {setError, setMenu, setMenuSuccess} from './slice'
import {fetchMenu} from '../../api/menu'
import {MenuTypes} from '../../types/menu'
import {AxiosResponse} from 'axios'

function* menuWorker() {
  try {
    const response: AxiosResponse<MenuTypes[]> = yield call(fetchMenu)

    const withQuantity = response.data.map((data) => {
      data.quantity = 0
      return data
    })

    yield put(setMenuSuccess(withQuantity))
  } catch (e) {
    const error = e as errorType
    yield put(setError(error.message))
  }
}

export function* menuWatcher() {
  yield takeEvery(setMenu.type, menuWorker)
}
