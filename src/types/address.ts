import {UserType} from './user'

export interface AddressTypes {
  city: string
  street: string
  buildingNumber: string
  flatNumber: string
}

export interface AddAddressTypes {
  user: UserType
  address: AddressTypes
  isNewData: boolean
}
