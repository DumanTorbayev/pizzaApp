import React, {FC} from 'react'
import styles from './header.module.scss'
import {NavLink} from 'react-router-dom'
import {routes} from '../RootRoutes'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const NavbarList: FC = () => {
  const {user} = useTypedSelector((state) => state.auth)

  return (
    <ul className={styles.navbarList}>
      <li className={styles.navbarItem}>
        <NavLink
          to={routes.menu}
          activeClassName={styles.navbarLinkActive}
          className={styles.navbarLink}
        >
          Menu
        </NavLink>
      </li>
      {user ? (
        <>
          <li className={styles.navbarItem}>
            <NavLink
              to={routes.orders}
              activeClassName={styles.navbarLinkActive}
              className={styles.navbarLink}
            >
              Orders
            </NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink
              to={routes.signOut}
              activeClassName={styles.navbarLinkActive}
              className={styles.navbarLink}
            >
              Sign out
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className={styles.navbarItem}>
            <NavLink
              to={routes.signIn}
              activeClassName={styles.navbarLinkActive}
              className={styles.navbarLink}
            >
              Sign in
            </NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink
              to={routes.signUp}
              activeClassName={styles.navbarLinkActive}
              className={styles.navbarLink}
            >
              Sign up
            </NavLink>
          </li>
        </>
      )}
    </ul>
  )
}

export default NavbarList
