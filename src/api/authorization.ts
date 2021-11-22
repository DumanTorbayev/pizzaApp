import firebase from '../firebase'
import {IAuthorization} from '../types/auth'

const firebaseAuth = firebase.auth()

export const authorization = ({email, password}: IAuthorization) => {
  return firebaseAuth.signInWithEmailAndPassword(email, password)
}

export const registration = ({email, password}: IAuthorization) => {
  return firebaseAuth.createUserWithEmailAndPassword(email, password)
}
