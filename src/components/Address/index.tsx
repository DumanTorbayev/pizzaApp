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
        <span className={styles.subtitle}>City:</span>&nbsp;{city}
      </p>
      <p>
        <span className={styles.subtitle}>Street:</span>&nbsp;{street}
      </p>
      <p>
        <span className={styles.subtitle}>Building number:</span>&nbsp;
        {buildingNumber}
      </p>
      <p>
        <span className={styles.subtitle}>Apartment/Office number:</span>&nbsp;
        {flatNumber}
      </p>
    </Card>
  )
}
