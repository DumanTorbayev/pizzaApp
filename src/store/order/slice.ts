import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {OrderDataTypes} from '../../types/order'

interface initialStateTypes {
  isLoading: boolean
  error: string | null
}

const initialState: initialStateTypes = {
  isLoading: false,
  error: null,
}

const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrderInit(state, action: PayloadAction<OrderDataTypes>) {
      state.isLoading = true
    },
    placeOrderSuccess(state) {
      state.isLoading = false
      state.error = null
    },
    placeOrderFail(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {placeOrderInit, placeOrderSuccess, placeOrderFail} = order.actions
export default order.reducer
