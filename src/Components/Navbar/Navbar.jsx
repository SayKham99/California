import React from 'react'
import styles from './Navbar.module.scss'
import Logo from '../../Assets/Icons/california.svg'
import Search from '../../Assets/Icons/search.svg'
import Cart from '../../Assets/Icons/cart.svg'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navbar__logo}>
                    <NavLink to='/'>
                        <img src={Logo} alt="california" />
                    </NavLink>
                </div>
                <div className={styles.navbar__menu}>
                    <ul>
                        <li>
                            <NavLink to='/products'>All Products</NavLink>
                        </li>
                        <li>
                            <NavLink to='/solutions'>Solutions</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/support'>Support</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={styles.navbar__icons}>
                    <NavLink to='/search'>
                        <img src={Search} alt="search" className={styles.img} />
                    </NavLink>
                    <NavLink to='/cart'>
                        <img src={Cart} alt="cart" className={styles.img} />
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar