import React from 'react'
import {Navigate} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import firebase from '../../firebase'
import {routes} from '../../components/RootRoutes'

const SignOut = () => {
  const {user} = useTypedSelector((state) => state.auth)

  if (user) {
    firebase.auth().signOut()
  }

  return <Navigate to={routes.home} replace={true} />
}

export default SignOut
