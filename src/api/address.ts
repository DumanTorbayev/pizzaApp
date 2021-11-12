import firebase from '../firebase'
import {UserType} from '../types/user'
import {AddAddressTypes} from '../types/address'

const db = firebase.firestore()

export const fetchAddress = async (user: UserType) => {
  const response = await db.collection('users').doc(user.uid).get()
  return response.data()
}

export const addAddress = async ({
  user,
  address,
  isNewData = true,
}: AddAddressTypes) => {
  const dbRef = db.collection('users').doc(user.uid)

  if (isNewData) {
    return await dbRef.set({...address})
  } else {
    return await dbRef.update({...address})
  }
}
