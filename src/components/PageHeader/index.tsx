import React, {useState} from 'react'
import {Header} from 'antd/es/layout/layout'
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import {routes} from '../RootRoutes'

import NavbarList from './NavbarList'
import {SideNavbar} from '../UI/SideNavbar'

import logo from '../../assets/images/pizza.png'
import styles from './header.module.scss'

export const PageHeader = () => {
  const [sidebarShown, setSidebarShown] = useState<boolean>(false)

  return (
    <Header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link to={routes.home} className={styles.navbarLink}>
            <img src={logo} alt="Logotype" />
            <span>PIZZA</span>
          </Link>
        </div>
        <div className={styles.navbarDesktop}>
          <NavbarList />
          <Button
            className={styles.burgerMenu}
            onClick={() => setSidebarShown(!sidebarShown)}
          >
            <span />
            <span />
            <span />
          </Button>
        </div>
        <div className={styles.navbarMobile}>
          <SideNavbar
            sidebarClose={setSidebarShown}
            sidebarShown={sidebarShown}
          />
        </div>
      </nav>
    </Header>
  )
}
