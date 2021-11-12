import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {UserType} from '../../types/user'
import {AddressTypes} from '../../types/address'

interface initialStateTypes {
  address: AddressTypes | null
  isLoading: boolean
  error: string | null
}

const initialState: initialStateTypes = {
  address: null,
  isLoading: false,
  error: null,
}

const address = createSlice({
  name: 'address',
  initialState,
  reducers: {
    getAddress(state, action: PayloadAction<UserType>) {
      state.isLoading = true
    },
    getAddressSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false
      state.address = action.payload
      state.error = null
    },
    getAddressFail(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    setAddress(state, action: PayloadAction<any>) {
      state.isLoading = true
    },
    setAddressSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false
      state.address = action.payload
      state.error = null
    },
    setAddressFail(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
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
