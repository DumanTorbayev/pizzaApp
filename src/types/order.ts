import {IMenu} from './menu'
import {IAddress} from './address'
import {Key} from 'react'

export interface IOrderData {
  order: IMenu[]
  address: IAddress | null
  uid: string | null
  totalPrice: number
  paymentMethod: number
  ts: Key | null | undefined
}
