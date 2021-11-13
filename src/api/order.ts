import firebase from '../firebase'
import {OrderDataTypes} from '../types/order'

const db = firebase.firestore()

export const setOrder = async (data: OrderDataTypes) => {
  const dbRef = db.collection('orders').doc()

  return await dbRef.set({...data, ts: Math.round(new Date().getTime())})
}

export const getOrders = (uid: string, limit: number) => {
  const dbRef = db
    .collection('orders')
    .where('uid', '==', uid)
    .orderBy('ts', 'desc')
    .limit(limit)

  return dbRef.get()
}
