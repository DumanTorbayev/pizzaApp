import React, {FC, Suspense, useEffect} from 'react'
import firebase from './firebase'
import {Layout} from 'antd'
import {PageHeader} from './components/PageHeader'
import {RootRoutes} from './components/RootRoutes'
import {useActions} from './hooks/useActions'
import {CustomSpinner} from './components/UI/CustomSpinner'

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
