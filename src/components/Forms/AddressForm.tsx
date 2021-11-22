import React from 'react'
import {Button, Col, Form, Input, Row} from 'antd'

import {useTypedSelector} from '../../hooks/useTypedSelector'
import {IAddress} from '../../types/address'
import {useActions} from '../../hooks/useActions'

import styles from './form.module.scss'

interface IAddressForm {
  handleHideAddressForm: (show: boolean) => void
}

export const AddressForm: React.FC<IAddressForm> = ({
  handleHideAddressForm,
}) => {
  const {address} = useTypedSelector((state) => state.address)
  const {user} = useTypedSelector((state) => state.auth)
  const {setAddress} = useActions()

  const onFinish = (values: IAddress) => {
    const isNewData = !address

    setAddress({user, address: values, isNewData})
    handleHideAddressForm(false)
  }

  return (
    <Row>
      <Col xs={24} lg={16} xl={10}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{remember: true}}
          onFinish={onFinish}
        >
          <Form.Item
            name="city"
            rules={[
              {
                required: true,
                message: 'Enter the name of the city',
              },
              {min: 4, message: 'Must be at least 4 characters'},
              {
                pattern: /^[a-zA-Zа-яА-Я]+$/,
                message: 'Enter the correct city name',
              },
            ]}
            initialValue={address ? address.city : ''}
          >
            <Input placeholder="City" size="large" />
          </Form.Item>
          <Form.Item
            name="street"
            rules={[
              {
                required: true,
                message: 'Enter street name',
              },
            ]}
            initialValue={address ? address.street : ''}
          >
            <Input placeholder="Street" size="large" />
          </Form.Item>
          <Form.Item
            name="buildingNumber"
            rules={[
              {
                required: true,
                message: 'Enter building number',
              },
            ]}
            initialValue={address ? address.buildingNumber : ''}
          >
            <Input placeholder="Building number" size="large" />
          </Form.Item>
          <Form.Item
            name="flatNumber"
            rules={[
              {
                required: true,
                message: 'Enter your apartment/office number',
              },
            ]}
            initialValue={address ? address.flatNumber : ''}
          >
            <Input placeholder="Apartment/Office number" size="large" />
          </Form.Item>
          <Row gutter={12} className={styles.mt}>
            <Col>
              <Button
                className="secondary-btn"
                type="primary"
                onClick={() => handleHideAddressForm(false)}
              >
                Cancel
              </Button>
            </Col>
            <Col>
              <Button className="primary-btn" type="primary" htmlType="submit">
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
