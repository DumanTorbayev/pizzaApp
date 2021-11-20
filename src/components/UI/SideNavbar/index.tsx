import React, {FC} from 'react'
import styles from './sideNavbar.module.scss'
import logo from '../../../assets/images/pizza.png'
import classNames from 'classnames'
import NavbarList from '../../PageHeader/NavbarList'
import {Link} from 'react-router-dom'
import {routes} from '../../RootRoutes'

interface SideNavbarTypes {
  sidebarClose: (show: boolean) => void
  sidebarShown: boolean
}

export const SideNavbar: FC<SideNavbarTypes> = ({
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
