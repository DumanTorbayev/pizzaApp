import React, {useEffect, useState} from 'react'
import {Alert, Button, Divider, Radio, Space} from 'antd'
import {Navigate} from 'react-router-dom'

import {Address} from '../../components/Address'
import {AddressForm} from '../../components/Forms/AddressForm'
import {CustomSpinner} from '../../components/UI/CustomSpinner'
import {OrderPlaced} from '../../components/UI/OrderPlaced'
import {routes} from '../../components/RootRoutes'

import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {getTotalPrice} from '../../store/cart/selectors'
import {IOrderData} from '../../types/order'

import styles from './checkout.module.scss'

const Checkout = () => {
  const {user} = useTypedSelector((state) => state.auth)
  const {items} = useTypedSelector((state) => state.cart)
  const totalPrice = useTypedSelector((state) => getTotalPrice(state))
  const {address, addressIsLoading, addressError} = useTypedSelector(
    (state) => state.address
  )
  const {orderError, orderIsLoading, orderPlaced} = useTypedSelector(
    (state) => state.order
  )
  const {getAddress, placeOrderInit, placeOrder, placeOrderFail} = useActions()
  const [addressFormShow, setAddressFormShow] = useState<boolean>(false)
  const [paymentMethod, setPaymentMethod] = useState<number>(0)

  useEffect(() => {
    if (user) getAddress(user)

    return () => {
      placeOrderInit()
    }
  }, [])

  const handleShowAddressForm = () => {
    setAddressFormShow(true)
  }

  const placeOrderHandler = () => {
    const data: IOrderData = {
      order: items,
      address,
      uid: user && user.uid,
      totalPrice,
      paymentMethod,
      ts: Math.round(new Date().getTime()),
    }

    if (address && paymentMethod) {
      placeOrder(data)
    } else if (!address && !paymentMethod) {
      placeOrderFail('Please make sure that all fields are filled')
    } else if (!address) {
      placeOrderFail('Please fill in the address field')
    } else {
      placeOrderFail('Please select the mode of payment field')
    }
  }

  // render functions
  const addressFooterRender = () => {
    return addressError === 'Address not found' ? (
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
    )
  }

  const addressContentRender = () => {
    return addressIsLoading ? (
      <CustomSpinner />
    ) : (
      <>
        {address && <Address {...address} />}

        {addressFormShow ? (
          <AddressForm handleHideAddressForm={setAddressFormShow} />
        ) : (
          addressFooterRender()
        )}
      </>
    )
  }

  const checkoutContentRender = () => {
    if (orderIsLoading) return <CustomSpinner />

    return orderPlaced ? (
      <OrderPlaced />
    ) : (
      <>
        <div className={styles.content}>
          <Divider className="pages-subtitle" orientation="left">
            Location
          </Divider>

          {addressContentRender()}
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
      </>
    )
  }

  if (!user) return <Navigate to={routes.signIn} replace={true} />
  if (items.length === 0) return <Navigate to={routes.menu} replace={true} />

  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Checkout
        </Divider>

        {checkoutContentRender()}
      </div>
    </div>
  )
}

export default Checkout
