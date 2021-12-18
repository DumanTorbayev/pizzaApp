import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {IUser} from '../../types/user'
import {IAddAddress, IAddress} from '../../types/address'

interface IInitialState {
  address: IAddress | null
  addressIsLoading: boolean
  addressError: string | null
}

const initialState: IInitialState = {
  address: null,
  addressIsLoading: false,
  addressError: null,
}

const address = createSlice({
  name: 'address',
  initialState,
  reducers: {
    getAddress(state, action: PayloadAction<IUser>) {
      state.addressIsLoading = true
    },
    getAddressSuccess(state, action: PayloadAction<IAddress>) {
      state.addressIsLoading = false
      state.address = action.payload
      state.addressError = null
    },
    getAddressFail(state, action: PayloadAction<string>) {
      state.addressIsLoading = false
      state.addressError = action.payload
    },
    setAddress(state, action: PayloadAction<IAddAddress>) {
      state.addressIsLoading = true
    },
    setAddressSuccess(state, action: PayloadAction<IAddress>) {
      state.addressIsLoading = false
      state.address = action.payload
      state.addressError = null
    },
    setAddressFail(state, action: PayloadAction<string>) {
      state.addressIsLoading = false
      state.addressError = action.payload
    },
  },
})

export const {
  getAddress,
  getAddressSuccess,
  getAddressFail,
  setAddress,
  setAddressSuccess,
  setAddressFail,
} = address.actions
export default address.reducer
