import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IOrderData} from '../../types/order'

interface IInitialState {
  orderIsLoading: boolean
  orderPlaced: boolean
  orderError: string | null
  orders: IOrderData[]
}

const initialState: IInitialState = {
  orderIsLoading: false,
  orderPlaced: false,
  orderError: null,
  orders: [],
}

const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrderInit(state) {
      state.orderPlaced = false
    },
    placeOrder(state, action: PayloadAction<IOrderData>) {
      state.orderIsLoading = true
    },
    placeOrderSuccess(state) {
      state.orderIsLoading = false
      state.orderPlaced = true
      state.orderError = null
    },
    placeOrderFail(state, action: PayloadAction<string>) {
      state.orderIsLoading = false
      state.orderError = action.payload
      state.orderPlaced = false
    },
    getOrder(state, action: PayloadAction<string>) {
      state.orderIsLoading = true
    },
    getOrderSuccess(state, action: PayloadAction<IOrderData[]>) {
      state.orderIsLoading = false
      state.orderError = null
      state.orders = action.payload
    },
    getOrderFail(state, action: PayloadAction<string>) {
      state.orderIsLoading = false
      state.orderError = action.payload
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
