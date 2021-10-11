import React, {FC} from 'react';
import styles from './header.module.scss';
import logo from '../../assets/images/pizza.png'
import {Header} from "antd/es/layout/layout";
import {Link, NavLink} from 'react-router-dom';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {routes} from "../RootRoutes";

export const PageHeader: FC = () => {
    const {user} = useTypedSelector(state => state.auth)

    return (
        <Header className={styles.header}>
            <nav className={styles.navbar}>
                <ul className={styles.navbar__list}>
                    <li className={`${styles.navbar__item} ${styles['navbar__item--logo']}`}>
                        <Link to={routes.home} className={styles.navbar__link}>
                            <img src={logo} alt=""/>
                            <span>PIZZA</span>
                        </Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <NavLink to={routes.menu} className={styles.navbar__link}>
                            Menu
                        </NavLink>
                    </li>
                    {user
                        ? <>
                            <li className={styles.navbar__item}>
                                <NavLink to={routes.orders} className={styles.navbar__link}>
                                    Orders
                                </NavLink>
                            </li>
                            <li className={styles.navbar__item}>
                                <NavLink to={routes.signOut} className={styles.navbar__link}>
                                    Sign out
                                </NavLink>
                            </li>
                        </>
                        : <>
                            <li className={styles.navbar__item}>
                                <NavLink to={routes.signIn} className={styles.navbar__link}>
                                    Sign in
                                </NavLink>
                            </li>
                            <li className={styles.navbar__item}>
                                <NavLink to={routes.signUp} className={styles.navbar__link}>
                                    Sign up
                                </NavLink>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </Header>
    );
};