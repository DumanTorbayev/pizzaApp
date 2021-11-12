import React, {FC} from 'react'
import styles from './form.module.scss'
import {Button, Col, Form, Input, Row} from 'antd'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {AddressTypes} from '../../types/address'
import {useActions} from '../../hooks/useActions'

interface addressFormPropTypes {
  handleHideAddressForm: (show: boolean) => void
}

export const AddressForm: FC<addressFormPropTypes> = ({
  handleHideAddressForm,
}) => {
  const {address} = useTypedSelector((state) => state.address)
  const {user} = useTypedSelector((state) => state.auth)
  const {setAddress} = useActions()

  const onFinish = (values: AddressTypes) => {
    const isNewData = !address

    setAddress({user, address: values, isNewData})
    handleHideAddressForm(false)
  }

  return (
    <Row>
      <Col sm={24} lg={16} xl={10}>
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
                message: 'Введите название города',
              },
              {min: 4, message: 'Должно быть минимум 4 символа'},
              {
                pattern: /^[a-zA-Zа-яА-Я]+$/,
                message: 'Введите корректное название города',
              },
            ]}
            initialValue={address ? address.city : ''}
          >
            <Input placeholder="Город" size="large" />
          </Form.Item>
          <Form.Item
            name="street"
            rules={[
              {
                required: true,
                message: 'Введите название улицы',
              },
            ]}
            initialValue={address ? address.street : ''}
          >
            <Input placeholder="Улица" size="large" />
          </Form.Item>
          <Form.Item
            name="buildingNumber"
            rules={[
              {
                required: true,
                message: 'Введите номер дома/здания',
              },
            ]}
            initialValue={address ? address.buildingNumber : ''}
          >
            <Input placeholder="Номер дома/здания" size="large" />
          </Form.Item>
          <Form.Item
            name="flatNumber"
            rules={[
              {
                required: true,
                message: 'Введите номер квартиры/офиса',
              },
            ]}
            initialValue={address ? address.flatNumber : ''}
          >
            <Input placeholder="Номер квартиры/офиса" size="large" />
          </Form.Item>
          <Row gutter={12} className={styles.mt}>
            <Col>
              <Button
                className="secondary-btn"
                type="primary"
                onClick={() => handleHideAddressForm(false)}
              >
                Отменить
              </Button>
            </Col>
            <Col>
              <Button className="primary-btn" type="primary" htmlType="submit">
                Обновить
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
