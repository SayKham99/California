import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Watch from '../../Assets/Images/Watch.png'
import Phone from '../../Assets/Images/headerImage.png'
import MacBookPro from '../../Assets/Images/MacBookPro13.png'
import Ipad from '../../Assets/Images/Ipad.png'
import { Carousel } from 'react-responsive-carousel'
import styles from './Header.module.scss'
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <header className={styles.header}>
            <Carousel swipeable={true} showArrows={false} showStatus={false} showThumbs={false} autoPlay infiniteLoop={true}>
                <div className={styles.slide}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>The new Phones are here take a look.</h1>
                        <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perferendis corporis odio cumque dolorem velit!</p>
                        <NavLink to='/phones'>
                            <button className={styles.btn}>Explore</button>
                        </NavLink>
                    </div>
                    <img src={Phone} alt="phone" className={styles.picture} />
                </div>
                <div className={styles.slide}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>The new Watch are here take a look.</h1>
                        <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perferendis corporis odio cumque dolorem velit!</p>
                        <NavLink to='/watchs'>
                            <button className={styles.btn}>Explore</button>
                        </NavLink>
                    </div>
                    <img src={Watch} alt="phone" className={styles.picture} />
                </div>
                <div className={styles.slide}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>The new MacBook are here take a look.</h1>
                        <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perferendis corporis odio cumque dolorem velit!</p>
                        <NavLink to='/macs'>
                            <button className={styles.btn}>Explore</button>
                        </NavLink>
                    </div>
                    <img src={MacBookPro} alt="phone" className={styles.picture} />
                </div>
                <div className={styles.slide}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>The new Ipad are here take a look.</h1>
                        <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos perferendis corporis odio cumque dolorem velit!</p>
                        <NavLink to='/ipads'>
                            <button className={styles.btn}>Explore</button>
                        </NavLink>
                    </div>
                    <img src={Ipad} alt="phone" className={styles.picture} />
                </div>
            </Carousel>
        </header>
    )
}

export default Header