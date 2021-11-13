import {placeOrderFail, placeOrderInit, placeOrderSuccess} from './slice'

export {default as order} from './slice'
export const orderActions = {
  placeOrderInit,
  placeOrderSuccess,
  placeOrderFail,
}
export * from './saga'
