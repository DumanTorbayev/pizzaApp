import firebase from '../firebase'
import {IOrderData} from '../types/order'

const db = firebase.firestore()

export const setOrder = async (data: IOrderData) => {
  const dbRef = db.collection('orders').doc()

  return await dbRef.set({...data})
}

export const fetchOrders = async (uid: string) => {
  const data: IOrderData[] | PromiseLike<IOrderData[]> = []

  const response = await db
    .collection('orders')
    .where('uid', '==', uid)
    .orderBy('ts', 'desc')
    .get()

  response.docs.forEach((doc) => {
    data.push(<IOrderData>doc.data())
  })

  return data
}
