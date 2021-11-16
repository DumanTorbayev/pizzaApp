import {MenuTypes} from './menu'
import {AddressTypes} from './address'
import {Key} from 'react'

export interface OrderDataTypes {
  order: MenuTypes[]
  address: AddressTypes | null
  uid: string | null
  totalPrice: number
  paymentMethod: number
  ts: Key | null | undefined
}
