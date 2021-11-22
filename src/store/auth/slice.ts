import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {IAuthorization} from '../../types/auth'
import {IUser} from '../../types/user'

interface IInitialState {
  user: IUser | null
  isLoading: boolean
  registered: boolean
  error: null | string
}

const initialState: IInitialState = {
  user: null,
  isLoading: false,
  registered: false,
  error: null,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthChange(state, action) {
      state.user = action.payload
      state.isLoading = false
      state.error = null
    },
    setEmailAuth(state, action: PayloadAction<IAuthorization>) {
      state.isLoading = true
      state.error = null
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    setRegister(state, action: PayloadAction<IAuthorization>) {
      state.isLoading = true
      state.error = null
    },
    setRegisterSuccess(state) {
      state.isLoading = false
      state.error = null
    },
    setRegisterFail(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {
  setAuthChange,
  setEmailAuth,
  setError,
  setRegister,
  setRegisterSuccess,
  setRegisterFail,
} = auth.actions
export default auth.reducer
