import {createSelector} from 'reselect'
import {MenuTypes} from '../../types/menu'
import {RootState} from '../index'

const selectShopItems = (state: RootState) => state.cart.items

export const getTotalPrice = createSelector(selectShopItems, (items) =>
  items.reduce(
    (total: number, item: MenuTypes) => total + item.quantity * item.price,
    0
  )
)
