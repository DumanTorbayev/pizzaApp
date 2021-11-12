import firebase from '../firebase'

const db = firebase.firestore()

export const setOrder = (data: any) => {
  const dbRef = db.collection('orders').doc()

  return dbRef.set({...data, ts: Math.round(new Date().getTime())})
}

export const getOrders = (uid: string, limit: number) => {
  const dbRef = db
    .collection('orders')
    .where('uid', '==', uid)
    .orderBy('ts', 'desc')
    .limit(limit)

  return dbRef.get()
}
