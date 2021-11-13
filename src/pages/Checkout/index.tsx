import React, {FC, useEffect, useState} from 'react'
import styles from './checkout.module.scss'
import {Alert, Button, Divider, Radio, Space, Spin} from 'antd'
import {Address} from '../../components/Address'
import {AddressForm} from '../../components/Forms/AddressForm'
import {routes} from '../../components/RootRoutes'
import {Redirect} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {getTotalPrice} from '../../store/cart/selectors'
import {OrderDataTypes} from '../../types/order'

export const Checkout: FC = () => {
  const {user} = useTypedSelector((state) => state.auth)
  const {items} = useTypedSelector((state) => state.cart)
  const totalPrice = useTypedSelector((state) => getTotalPrice(state))
  const {
    address,
    isLoading,
    error: addressError,
  } = useTypedSelector((state) => state.address)
  const {error: orderError} = useTypedSelector((state) => state.order)
  const {getAddress, placeOrderInit, placeOrderFail} = useActions()
  const [addressFormShow, setAddressFormShow] = useState<boolean>(false)
  const [paymentMethod, setPaymentMethod] = useState<number>(0)

  useEffect(() => {
    if (user) getAddress(user)
  }, [])

  const handleShowAddressForm = () => {
    setAddressFormShow(true)
  }

  const placeOrderHandler = () => {
    const data: OrderDataTypes = {
      order: items,
      address,
      uid: user && user.uid,
      totalPrice,
      paymentMethod,
    }

    if (address && paymentMethod) {
      placeOrderInit(data)
    } else if (!address && !paymentMethod) {
      placeOrderFail('Please make sure that all fields are filled')
    } else if (!address) {
      placeOrderFail('Please fill in the address field')
    } else {
      placeOrderFail('Please select the mode of payment field')
    }
  }

  if (!user) return <Redirect to={routes.signIn} />
  if (items.length === 0) return <Redirect to={routes.menu} />

  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Checkout
        </Divider>

        <div className={styles.content}>
          <Divider className="pages-subtitle" orientation="left">
            Location
          </Divider>

          {isLoading ? (
            <Spin size="large" />
          ) : (
            <>
              {address && <Address {...address} />}
              {addressFormShow ? (
                <AddressForm handleHideAddressForm={setAddressFormShow} />
              ) : addressError === 'Address not found' ? (
                <>
                  <Alert
                    message={addressError}
                    type="error"
                    className={styles.errorAlert}
                  />

                  <div className={styles.mt}>
                    <Button
                      className="primary-btn"
                      type="primary"
                      onClick={handleShowAddressForm}
                    >
                      Add address
                    </Button>
                  </div>
                </>
              ) : (
                <Button
                  className="primary-btn"
                  type="primary"
                  onClick={handleShowAddressForm}
                >
                  Update address
                </Button>
              )}
            </>
          )}
        </div>

        <div className={styles.content}>
          <Divider className="pages-subtitle" orientation="left">
            Payment method
          </Divider>
          <Radio.Group
            onChange={(e) => setPaymentMethod(e.target.value)}
            value={paymentMethod}
          >
            <Space direction="vertical">
              <Radio value={1}>In cash</Radio>
              <Radio disabled={true} value={2}>
                Online card
              </Radio>
              <Radio value={3}>By card to the courier</Radio>
            </Space>
          </Radio.Group>

          {orderError && (
            <Alert
              message={orderError}
              type="error"
              className={styles.errorAlert}
            />
          )}

          <div className={styles.mt}>
            <Button
              type="primary"
              className="primary-btn"
              onClick={placeOrderHandler}
            >
              Place order
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
