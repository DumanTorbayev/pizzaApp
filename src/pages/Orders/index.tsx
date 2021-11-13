import React, {FC} from 'react'
import {Divider} from 'antd'

export const Orders: FC = () => {
  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Placed orders
        </Divider>
      </div>
    </div>
  )
}
