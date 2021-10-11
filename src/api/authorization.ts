import firebase from "../firebase";
import {authorizationTypes} from "../types/auth";

const firebaseAuth = firebase.auth()

export const authorization = ({email, password}: authorizationTypes) => {
    return firebaseAuth.signInWithEmailAndPassword(email, password)
}

export const registration = ({email, password}: authorizationTypes) => {
    return firebaseAuth.createUserWithEmailAndPassword(email, password)
}