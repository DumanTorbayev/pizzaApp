import React, {FC} from 'react'
import styles from './address.module.scss'
import {AddressTypes} from '../../types/address'
import {Card} from 'antd'

export const Address: FC<AddressTypes> = ({
  city,
  street,
  buildingNumber,
  flatNumber,
}) => {
  return (
    <Card
      className={styles.card}
      size="small"
      title="Адрес"
      headStyle={{fontSize: '20px'}}
    >
      <p>
        <span className={styles.subtitle}>Город:</span> {city}
      </p>
      <p>
        <span className={styles.subtitle}>Улица:</span> {street}
      </p>
      <p>
        <span className={styles.subtitle}>Дом/Здание:</span> {buildingNumber}
      </p>
      <p>
        <span className={styles.subtitle}>Квартира/Офис:</span> {flatNumber}
      </p>
    </Card>
  )
}
