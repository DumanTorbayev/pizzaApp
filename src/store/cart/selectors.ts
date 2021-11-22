import {IMenu} from '../../types/menu'
import {RootState} from '../index'

export const getTotalPrice = (state: RootState) => {
  const items = state.cart.items

  return items.reduce(
    (total: number, item: IMenu) => total + item.quantity * item.price,
    0
  )
}
