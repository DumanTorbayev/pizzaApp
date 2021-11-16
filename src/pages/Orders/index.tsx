import React, {FC, useEffect} from 'react'
import {Divider, Typography} from 'antd'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {Redirect} from 'react-router-dom'
import {routes} from '../../components/RootRoutes'
import {CustomSpinner} from '../../components/UI/CustomSpinner'
import {OrderItems} from '../../components/OrderItems'

export const Orders: FC = () => {
  const {getOrder, clearOrders} = useActions()
  const {user} = useTypedSelector((state) => state.auth)
  const {orders, isLoading} = useTypedSelector((state) => state.order)

  useEffect(() => {
    if (user) getOrder(user.uid)

    return () => {
      clearOrders()
    }
  }, [])

  if (!user) return <Redirect to={routes.signIn} />

  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Orders
        </Divider>

        {isLoading ? (
          <CustomSpinner />
        ) : orders.length > 0 ? (
          orders.map((order) => <OrderItems {...order} key={order.ts} />)
        ) : (
          <Typography.Title level={2}>
            You haven't ordered anything yet!
          </Typography.Title>
        )}
      </div>
    </div>
  )
}
