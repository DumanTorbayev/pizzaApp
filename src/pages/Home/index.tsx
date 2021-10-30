import React, {FC} from 'react'
import styles from './home.module.scss'
import logo from '../../assets/images/pizza.png'
import {Content} from 'antd/lib/layout/layout'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import {routes} from '../../components/RootRoutes'

export const Home: FC = () => {
  return (
    <Content className={`page-wrapper ${styles.container}`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
            <span>Pizza</span>
          </div>
          <h2 className={styles.subtitle}>Pizza Online Ordering</h2>
          <h1 className={styles.title}>Your Pizza Delivered Fast & Fresh</h1>
          <Button className="primary-btn" type="primary">
            <Link to={routes.menu}>Order Now</Link>
          </Button>
        </div>
      </div>
    </Content>
  )
}
