import React from 'react'
import {Button, Typography} from 'antd'
import {Link} from 'react-router-dom'

import {routes} from '../../RootRoutes'

export const OrderPlaced = () => {
  return (
    <div>
      <Typography.Title level={2}>Order Placed</Typography.Title>
      <Typography.Title level={3}>
        Your yummy pizza will arrive at your doorstep soon!
      </Typography.Title>
      <Button type="primary" className="primary-btn">
        <Link to={routes.menu}>Menu</Link>
      </Button>
    </div>
  )
}
