import {MenuTypes} from './menu'
import {AddressTypes} from './address'

export interface OrderDataTypes {
  order: MenuTypes[]
  address: AddressTypes | null
  uid: string | null
  totalPrice: number
  paymentMethod: number
}
