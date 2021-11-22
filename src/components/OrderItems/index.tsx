import React from 'react'

import {IOrderData} from '../../types/order'
import {Address} from '../Address'

import styles from './orderItems.module.scss'

export const OrderItems: React.FC<IOrderData> = ({
  address,
  order,
  ts,
  totalPrice,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>
        <strong className="d-inline-block mb-2">Time:</strong>&nbsp;
        {ts && new Date(ts).toDateString()}
      </div>

      {address && <Address {...address} />}

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.totalPrice}>
        <strong>Total Price:</strong>&nbsp;&#36;&nbsp;{totalPrice}
      </div>
    </div>
  )
}
