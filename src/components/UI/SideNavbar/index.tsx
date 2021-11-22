import React from 'react'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

import NavbarList from '../../PageHeader/NavbarList'
import {routes} from '../../RootRoutes'

import styles from './sideNavbar.module.scss'
import logo from '../../../assets/images/pizza.png'

interface ISideNavbar {
  sidebarClose: (show: boolean) => void
  sidebarShown: boolean
}

export const SideNavbar: React.FC<ISideNavbar> = ({
  sidebarClose,
  sidebarShown,
}) => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.menuIsOpen]: sidebarShown,
      })}
      onClick={() => sidebarClose(false)}
    >
      <div className={styles.body}>
        <div className={styles.logo}>
          <Link to={routes.home}>
            <img src={logo} alt="Logotype" />
            <span>PIZZA</span>
          </Link>
        </div>
        <NavbarList />
      </div>
    </div>
  )
}
