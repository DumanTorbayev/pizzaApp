import React, {FC, useState} from 'react'
import styles from './header.module.scss'
import logo from '../../assets/images/pizza.png'
import {Header} from 'antd/es/layout/layout'
import {Link} from 'react-router-dom'
import {routes} from '../RootRoutes'
import NavbarList from './NavbarList'
import {Button} from 'antd'
import {SideNavbar} from '../UI/SideNavbar'

export const PageHeader: FC = () => {
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
