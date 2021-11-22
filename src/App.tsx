import React, {FC, Suspense, useEffect} from 'react'
import {Layout} from 'antd'

import {PageHeader} from './components/PageHeader'
import {RootRoutes} from './components/RootRoutes'
import {CustomSpinner} from './components/UI/CustomSpinner'

import firebase from './firebase'
import {useActions} from './hooks/useActions'

export const App: FC = () => {
  const {setAuthChange} = useActions()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setAuthChange(user)
    })
  }, [setAuthChange])

  return (
    <>
      <Suspense fallback={<CustomSpinner />}>
        <Layout>
          <PageHeader />
          <RootRoutes />
        </Layout>
      </Suspense>
    </>
  )
}
