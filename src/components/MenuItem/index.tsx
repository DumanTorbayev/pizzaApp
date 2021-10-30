import React, {FC} from 'react'
import styles from './menuItem.module.scss'
import {Button, Card, Col, Image, Row, Typography} from 'antd'
import {MenuTypes} from '../../types/menu'
import {MinusOutlined, PlusOutlined} from '@ant-design/icons'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'

export const MenuItem: FC<MenuTypes> = ({
  name,
  description,
  imageUrl,
  price,
  id,
  quantity,
}) => {
  const item = {name, description, imageUrl, price, id, quantity}
  const {addItem, removeItem} = useActions()
  const {items, itemsId} = useTypedSelector((state) => state.cart)

  const handleAddToCart = () => addItem(item)
  const handleRemoveFromCart = () => removeItem(item)

  return (
    <Card
      size="small"
      bordered={false}
      hoverable={true}
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Image src={imageUrl} />
      <Typography.Title level={4} className={styles.cardTitle}>
        {name}
      </Typography.Title>
      <Typography.Text type="secondary" className={styles.cardText}>
        {description}
      </Typography.Text>
      <Row className={styles.cardRow}>
        <Col span={12}>$ {price}</Col>
        <Col span={12} className={styles.cardCol}>
          <Button
            type="primary"
            icon={<MinusOutlined />}
            size="small"
            className="primary-btn"
            onClick={handleRemoveFromCart}
          />
          <Typography.Text
            className={`${styles.cardText} ${styles.cardTextCounter}`}
          >
            {itemsId.hasOwnProperty(id)
              ? items[itemsId[id]].quantity
              : quantity}
          </Typography.Text>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="small"
            className="primary-btn"
            onClick={handleAddToCart}
          />
        </Col>
      </Row>
    </Card>
  )
}
