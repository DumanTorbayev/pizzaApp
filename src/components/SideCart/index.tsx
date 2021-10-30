import React from 'react'
import styles from './sideCart.module.scss'
import cartIcon from '../../assets/images/shopping-cart.png'
import {Button, Typography} from 'antd'
import {useHistory} from 'react-router-dom'
import {routes} from '../RootRoutes'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {SideCartItem} from './SideCartItem'
import {useActions} from '../../hooks/useActions'
import {getTotalPrice} from '../../store/cart/selectors'

export const SideCart = () => {
  const history = useHistory()
  const {items} = useTypedSelector((state) => state.cart)
  const totalPrice = useTypedSelector((state) => getTotalPrice(state))
  const {clearCart} = useActions()

  const goToCart = () => {
    history.push(routes.cart)
  }

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Typography.Title className={styles.title} level={2}>
          Cart
        </Typography.Title>
        {items.length > 0 && (
          <Button type="primary" danger={true} onClick={() => clearCart()}>
            Clear cart
          </Button>
        )}
      </div>

      <div className={styles.body}>
        {items.length === 0 && (
          <div className={styles.cartEmpty}>
            <img className={styles.cartEmptyImg} src={cartIcon} alt="" />
            <Typography.Title level={3}>Cart is empty</Typography.Title>
          </div>
        )}

        {items.map((item) => (
          <SideCartItem key={item.id} {...item} />
        ))}
      </div>
      {items.length > 0 && (
        <div className={styles.footer}>
          <Typography.Text className={styles.total}>
            $ {totalPrice}
          </Typography.Text>
          <Button
            type="primary"
            className={`${styles.cartBtn} primary-btn`}
            onClick={goToCart}
          >
            Go to cart
          </Button>
        </div>
      )}
    </div>
  )
}
