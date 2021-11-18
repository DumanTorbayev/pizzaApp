import React from 'react'
import styles from './cart.module.scss'
import {Button, Divider, Typography} from 'antd'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {CartItem} from '../../components/CartItem'
import {Link} from 'react-router-dom'
import {routes} from '../../components/RootRoutes'
import {getTotalPrice} from '../../store/cart/selectors'

const Cart = () => {
  const {items} = useTypedSelector((state) => state.cart)
  const totalPrice = useTypedSelector((state) => getTotalPrice(state))

  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Cart
        </Divider>

        <div className={styles.list}>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className={styles.footer}>
          <Typography.Title level={2}>$ {totalPrice}</Typography.Title>

          <Button className="primary-btn" type="primary">
            <Link to={routes.checkout}>Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart
