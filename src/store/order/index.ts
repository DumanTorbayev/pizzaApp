import {
  clearOrders,
  getOrder,
  getOrderFail,
  getOrderSuccess,
  placeOrder,
  placeOrderFail,
  placeOrderInit,
  placeOrderSuccess,
} from './slice'

export {default as order} from './slice'
export const orderActions = {
  placeOrder,
  placeOrderInit,
  placeOrderSuccess,
  placeOrderFail,
  getOrder,
  getOrderSuccess,
  getOrderFail,
  clearOrders,
}
export * from './saga'
