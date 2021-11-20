import React, {FC, useEffect} from 'react'
import styles from './menu.module.scss'
import {Col, Divider, Row} from 'antd'
import {MenuItem} from '../../components/MenuItem'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {SideCart} from '../../components/SideCart'
import {MenuSkeleton} from '../../components/UI/MenuSkeleton'

const Menu: FC = () => {
  const {setMenu, clearCart} = useActions()
  const {menuList, isLoading} = useTypedSelector((state) => state.menu)
  const {orderPlaced} = useTypedSelector((state) => state.order)

  useEffect(() => {
    setMenu()
  }, [])

  if (orderPlaced) {
    clearCart()
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Menu
        </Divider>

        <Row>
          <Col lg={{span: 15}}>
            <Row gutter={16}>
              {!isLoading
                ? menuList &&
                  menuList.map((ml) => (
                    <Col
                      className={styles.col}
                      xs={24}
                      sm={{span: 12}}
                      md={{span: 8}}
                      key={ml.id}
                    >
                      <MenuItem {...ml} />
                    </Col>
                  ))
                : Array(12)
                    .fill(0)
                    .map((_, index) => (
                      <Col
                        className={styles.col}
                        xs={24}
                        sm={{span: 12}}
                        md={{span: 8}}
                        key={index}
                      >
                        <MenuSkeleton />
                      </Col>
                    ))}
            </Row>
          </Col>

          <Col lg={{span: 8, offset: 1}}>
            <SideCart />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Menu
