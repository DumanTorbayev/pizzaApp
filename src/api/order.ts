import firebase from '../firebase'
import {OrderDataTypes} from '../types/order'

const db = firebase.firestore()

export const setOrder = async (data: OrderDataTypes) => {
  const dbRef = db.collection('orders').doc()

  return await dbRef.set({...data})
}

export const fetchOrders = async (uid: string) => {
  const data: OrderDataTypes[] | PromiseLike<OrderDataTypes[]> = []

  const response = await db
    .collection('orders')
    .where('uid', '==', uid)
    .orderBy('ts', 'desc')
    .get()

  response.docs.forEach((doc) => {
    data.push(<OrderDataTypes>doc.data())
  })

  return data
}
