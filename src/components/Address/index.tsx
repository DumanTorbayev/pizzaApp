import React from 'react'
import {Card} from 'antd'

import {IAddress} from '../../types/address'

import styles from './address.module.scss'

export const Address: React.FC<IAddress> = ({
  city,
  street,
  buildingNumber,
  flatNumber,
}) => {
  const addressArray = [
    {
      name: 'City',
      value: city,
    },
    {
      name: 'Street',
      value: street,
    },
    {
      name: 'Building number',
      value: buildingNumber,
    },
    {
      name: 'Apartment/Office number',
      value: flatNumber,
    },
  ]

  return (
    <Card
      className={styles.card}
      size="small"
      title="Address"
      headStyle={{fontSize: '16px'}}
    >
      {addressArray.map(({name, value}) => (
        <p key={value}>
          <span className={styles.subtitle}>{name}:</span>&nbsp;{value}
        </p>
      ))}
    </Card>
  )
}
