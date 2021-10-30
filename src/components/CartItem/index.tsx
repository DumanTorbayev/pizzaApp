import React, {FC} from 'react'
import styles from './cartItem.module.scss'
import {MenuTypes} from '../../types/menu'
import {useActions} from '../../hooks/useActions'
import {Button, Typography} from 'antd'
import {MinusOutlined, PlusOutlined} from '@ant-design/icons'

export const CartItem: FC<MenuTypes> = ({
  name,
  description,
  imageUrl,
  price,
  id,
  quantity,
}) => {
  const item = {name, description, imageUrl, price, id, quantity}
  const {addItem, removeItem} = useActions()

  const handleAddToCart = () => addItem(item)
  const handleRemoveFromCart = () => removeItem(item)

  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={imageUrl} alt="" />
      </div>

      <div className={styles.productContent}>
        <Typography.Title level={4} className={styles.productName}>
          {name}
        </Typography.Title>
        <Typography.Text type="secondary" className={styles.productDescription}>
          {description}
        </Typography.Text>
        <div className={styles.productWrapper}>
          <Typography.Text className={styles.productPrice}>
            $ {price}
          </Typography.Text>
          <div className={styles.productCounterWrapper}>
            <Button
              type="primary"
              icon={<MinusOutlined />}
              size="small"
              className="primary-btn"
              onClick={handleRemoveFromCart}
            />
            <Typography.Text className={styles.productCounterText}>
              {quantity}
            </Typography.Text>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="small"
              className="primary-btn"
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
