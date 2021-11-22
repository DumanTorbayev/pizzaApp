import {IUser} from './user'

export interface IAddress {
  city: string
  street: string
  buildingNumber: string
  flatNumber: string
}

export interface IAddAddress {
  user: IUser
  address: IAddress
  isNewData: boolean
}
