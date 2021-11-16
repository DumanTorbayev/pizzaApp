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
      title="Address"
      headStyle={{fontSize: '16px'}}
    >
      <p>
        <span className={styles.subtitle}>City:</span> {city}
      </p>
      <p>
        <span className={styles.subtitle}>Street:</span> {street}
      </p>
      <p>
        <span className={styles.subtitle}>Building number:</span>
        {buildingNumber}
      </p>
      <p>
        <span className={styles.subtitle}>Apartment/Office number:</span>
        {flatNumber}
      </p>
    </Card>
  )
}
