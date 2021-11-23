import React, {useEffect} from 'react'
import {Divider, Typography} from 'antd'
import {Navigate} from 'react-router-dom'

import {CustomSpinner} from '../../components/UI/CustomSpinner'
import {OrderItems} from '../../components/OrderItems'
import {routes} from '../../components/RootRoutes'

import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const Orders = () => {
  const {getOrder, clearOrders} = useActions()
  const {user} = useTypedSelector((state) => state.auth)
  const {orders, orderIsLoading} = useTypedSelector((state) => state.order)

  useEffect(() => {
    if (user) getOrder(user.uid)

    return () => {
      clearOrders()
    }
  }, [])

  const orderContentRender = () => {
    if (orderIsLoading) return <CustomSpinner />

    return orders.length > 0 ? (
      orders.map((order) => <OrderItems {...order} key={order.ts} />)
    ) : (
      <Typography.Title level={2}>
        You haven't ordered anything yet!
      </Typography.Title>
    )
  }

  if (!user) return <Navigate to={routes.signIn} replace={true} />

  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Orders
        </Divider>

        {orderContentRender()}
      </div>
    </div>
  )
}

export default Orders
