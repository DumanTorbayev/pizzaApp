import React, {FC, useEffect} from 'react'
import styles from './menu.module.scss'
import {Col, Divider, Row} from 'antd'
import {MenuItem} from '../../components/MenuItem'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {SideCart} from '../../components/SideCart'

export const Menu: FC = () => {
  const {setMenu} = useActions()
  const {menuList} = useTypedSelector((state) => state.menu)

  useEffect(() => {
    setMenu()
  }, [setMenu])

  return (
    <div className="page-wrapper">
      <div className="container">
        <Divider className="pages-title" orientation="left">
          Menu
        </Divider>

        <Row>
          <Col span={15}>
            <Row gutter={16}>
              {menuList &&
                menuList.map((ml) => (
                  <Col className={styles.col} span={8} key={ml.id}>
                    <MenuItem {...ml} />
                  </Col>
                ))}
            </Row>
          </Col>

          <Col span={8} offset={1}>
            <SideCart />
          </Col>
        </Row>
      </div>
    </div>
  )
}
