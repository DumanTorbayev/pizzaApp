import React, {FC, useEffect, useState} from 'react'
import styles from './checkout.module.scss'
import {Alert, Button, Divider, Radio, Space, Spin} from 'antd'
import {Address} from '../../components/Address'
import {AddressForm} from '../../components/Forms/AddressForm'
import {routes} from '../../components/RootRoutes'
import {Redirect} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'

export const Checkout: FC = () => {
  const {user} = useTypedSelector((state) => state.auth)
  const {items} = useTypedSelector((state) => state.cart)
  const {address, isLoading, error} = useTypedSelector((state) => state.address)
  const {getAddress} = useActions()
  const [addressFormShow, setAddressFormShow] = useState<boolean>(false)
  const [radioBtn, setRadioBtn] = useState<string>('')

  useEffect(() => {
    if (user) getAddress(user)
  }, [])

  const handleShowAddressForm = () => {
    setAddressFormShow(true)
  }

  const placeOrderHandler = () => {}

  if (!user) return <Redirect to={routes.signIn} />
  if (items.length === 0) return <Redirect to={routes.menu} />

  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Оформление заказа
        </Divider>

        <div className={styles.content}>
          <Divider className="pages-subtitle" orientation="left">
            Местоположение
          </Divider>

          {isLoading ? (
            <Spin size="large" />
          ) : (
            <>
              {address && <Address {...address} />}
              {addressFormShow ? (
                <AddressForm handleHideAddressForm={setAddressFormShow} />
              ) : error === 'Address not found' ? (
                <>
                  <Alert message={error} type="error" />
                  <Button
                    className="primary-btn"
                    type="primary"
                    onClick={handleShowAddressForm}
                  >
                    Добавить адрес
                  </Button>
                </>
              ) : (
                <Button
                  className="primary-btn"
                  type="primary"
                  onClick={handleShowAddressForm}
                >
                  Обновить адрес
                </Button>
              )}
            </>
          )}
        </div>

        <div className={styles.content}>
          <Divider className="pages-subtitle" orientation="left">
            Способ оплаты
          </Divider>
          <Radio.Group
            onChange={(e) => setRadioBtn(e.target.value)}
            value={radioBtn}
          >
            <Space direction="vertical">
              <Radio value={1}>Наличными</Radio>
              <Radio disabled={true} value={2}>
                Картой онлайн
              </Radio>
              <Radio value={3}>Картой курьеру</Radio>
            </Space>
          </Radio.Group>
          <div className={styles.mt}>
            <Button
              type="primary"
              className="primary-btn"
              onClick={placeOrderHandler}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
