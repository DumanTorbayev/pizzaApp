import React from 'react'
import {Redirect, Route} from 'react-router-dom'

import {routes} from '../RootRoutes'
import {useTypedSelector} from '../../hooks/useTypedSelector'

interface IPrivateRoute {
  component: React.ComponentType
  exact: boolean
  path: string
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({
  component,
  exact,
  path,
}) => {
  const {user} = useTypedSelector((state) => state.auth)

  return user ? (
    <Route component={component} exact={exact} path={path} />
  ) : (
    <Redirect to={routes.signIn} />
  )
}
