import React from 'react'
import {NavLink} from 'react-router-dom'

import {routes} from '../RootRoutes'
import {useTypedSelector} from '../../hooks/useTypedSelector'

import styles from './header.module.scss'

interface INavLinks {
  path: string
  name: string
  show: boolean
}

const NavbarList = () => {
  const {user} = useTypedSelector((state) => state.auth)

  const navLinks: INavLinks[] = [
    {
      path: routes.menu,
      name: 'Menu',
      show: true,
    },
    {
      path: routes.orders,
      name: 'Orders',
      show: !!user,
    },
    {
      path: routes.signOut,
      name: 'Sign out',
      show: !!user,
    },
    {
      path: routes.signIn,
      name: 'Sign in',
      show: !user,
    },
    {
      path: routes.signUp,
      name: 'Sign up',
      show: !user,
    },
  ]

  return (
    <ul className={styles.navbarList}>
      {navLinks.map(
        ({path, name, show}: INavLinks) =>
          show && (
            <li className={styles.navbarItem} key={path}>
              <NavLink
                to={path}
                className={({isActive}) =>
                  [styles.navbarLink, isActive ? styles.navbarLinkActive : null]
                    .filter(Boolean)
                    .join(' ')
                }
              >
                {name}
              </NavLink>
            </li>
          )
      )}
    </ul>
  )
}

export default NavbarList
