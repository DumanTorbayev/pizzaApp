import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {OrderDataTypes} from '../../types/order'

interface initialStateTypes {
  isLoading: boolean
  orderPlaced: boolean
  error: string | null
  orders: OrderDataTypes[]
}

const initialState: initialStateTypes = {
  isLoading: false,
  orderPlaced: false,
  error: null,
  orders: [],
}

const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrderInit(state) {
      state.orderPlaced = false
    },
    placeOrder(state, action: PayloadAction<OrderDataTypes>) {
      state.isLoading = true
    },
    placeOrderSuccess(state) {
      state.isLoading = false
      state.orderPlaced = true
      state.error = null
    },
    placeOrderFail(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
      state.orderPlaced = false
    },
    getOrder(state, action: PayloadAction<string>) {
      state.isLoading = true
    },
    getOrderSuccess(state, action: PayloadAction<OrderDataTypes[]>) {
      state.isLoading = false
      state.error = null
      state.orders = action.payload
    },
    getOrderFail(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    clearOrders(state) {
      state.orders = []
    },
  },
})

export const {
  placeOrderInit,
  placeOrder,
  placeOrderSuccess,
  placeOrderFail,
  getOrder,
  getOrderSuccess,
  getOrderFail,
  clearOrders,
} = order.actions
export default order.reducer
