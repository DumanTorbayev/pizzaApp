import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import {rootReducer, rootWatcher} from './index'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootWatcher)
