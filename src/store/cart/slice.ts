import {MenuTypes} from '../../types/menu'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface InitialStateTypes {
  items: MenuTypes[]
  itemsId: {[key: string]: number}
  totalPrice: number
}

const initialState: InitialStateTypes = {
  items: [],
  itemsId: {},
  totalPrice: 0,
}

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart(state) {
      state.items = []
      state.itemsId = {}
      state.totalPrice = 0
    },
    addItem(state, action: PayloadAction<MenuTypes>) {
      const {payload} = action

      if (payload.id in state.itemsId) {
        state.items[state.itemsId[payload.id]].quantity += 1
      } else {
        state.itemsId[payload.id] = state.items.length
        payload.quantity = 1

        state.items.push({
          ...payload,
        })
      }
    },
    removeItem(state, action: PayloadAction<MenuTypes>) {
      const {payload} = action

      if (!(payload.id in state.itemsId)) {
        return state
      }

      state.items[state.itemsId[payload.id]].quantity -= 1

      if (state.items[state.itemsId[payload.id]].quantity === 0) {
        state.items = state.items.filter((item) => item.id !== payload.id)
        const index = state.itemsId[payload.id]

        delete state.itemsId[payload.id]

        for (let i = index; i < state.items.length; i++) {
          state.itemsId[state.items[i].id] -= 1
        }
      }
    },
  },
})

export const {clearCart, addItem, removeItem} = cart.actions
export default cart.reducer
