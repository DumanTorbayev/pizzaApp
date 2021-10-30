import {addItem, clearCart, removeItem} from './slice'

export {default as cart} from './slice'

export const cartActions = {
  clearCart,
  addItem,
  removeItem,
}
