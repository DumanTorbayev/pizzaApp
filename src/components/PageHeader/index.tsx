import React, {FC} from 'react'
import styles from './header.module.scss'
import logo from '../../assets/images/pizza.png'
import {Header} from 'antd/es/layout/layout'
import {Link, NavLink} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {routes} from '../RootRoutes'

export const PageHeader: FC = () => {
  const {user} = useTypedSelector((state) => state.auth)

  return (
    <Header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={`${styles.navbarItem} ${styles.navbarItemLogo}`}>
            <Link to={routes.home} className={styles.navbarLink}>
              <img src={logo} alt="Logotype" />
              <span>PIZZA</span>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <NavLink to={routes.menu} className={styles.navbarLink}>
              Menu
            </NavLink>
          </li>
          {user ? (
            <>
              <li className={styles.navbarItem}>
                <NavLink to={routes.orders} className={styles.navbarLink}>
                  Orders
                </NavLink>
              </li>
              <li className={styles.navbarItem}>
                <NavLink to={routes.signOut} className={styles.navbarLink}>
                  Sign out
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className={styles.navbarItem}>
                <NavLink to={routes.signIn} className={styles.navbarLink}>
                  Sign in
                </NavLink>
              </li>
              <li className={styles.navbarItem}>
                <NavLink to={routes.signUp} className={styles.navbarLink}>
                  Sign up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </Header>
  )
}
