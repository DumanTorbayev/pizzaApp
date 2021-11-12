import {
  getAddress,
  getAddressFail,
  getAddressSuccess,
  setAddress,
  setAddressFail,
  setAddressSuccess,
} from './slice'

export {default as address} from './slice'
export const addressActions = {
  getAddress,
  getAddressSuccess,
  getAddressFail,
  setAddress,
  setAddressSuccess,
  setAddressFail,
}
export * from './saga'
