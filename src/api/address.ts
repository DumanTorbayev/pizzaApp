import firebase from '../firebase'
import {IUser} from '../types/user'
import {IAddAddress} from '../types/address'

const db = firebase.firestore()

export const fetchAddress = async (user: IUser) => {
  const response = await db.collection('users').doc(user.uid).get()
  return response.data()
}

export const addAddress = async ({
  user,
  address,
  isNewData = true,
}: IAddAddress) => {
  const dbRef = db.collection('users').doc(user.uid)

  if (isNewData) {
    return await dbRef.set({...address})
  } else {
    return await dbRef.update({...address})
  }
}
