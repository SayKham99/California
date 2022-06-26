import React from 'react'
import styles from './Footer.module.scss'
import Logo from '../../Assets/Icons/california.svg'
function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.descr}>
                    <img src={Logo} alt="Logo" className={styles.logo} />
                    <p>
                        Sign up for texts to be notified about <br /> our best offers on the perfect gifts.
                    </p>
                </div>
                <div className={styles.links}>
                    <div className={styles.ul}>
                        <ul>
                            <li>All Products</li>
                            <li>Phones</li>
                            <li>Wathc</li>
                            <li>Tablet</li>
                            <li>Laptops</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.links}>
                    <div className={styles.ul}>
                        <ul>
                            <li>Company</li>
                            <li>About</li>
                            <li>Support</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.links}>
                    <div className={styles.ul}>
                        <ul>
                            <li>Support</li>
                            <li>Style Guide</li>
                            <li>Licensing</li>
                            <li>Change Log</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.links}>
                    <div className={styles.ul}>
                        <ul>
                            <li>Follow Us</li>
                            <li>Instagram</li>
                            <li>Linkedin</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                </div>
                <hr />
            </footer>
        </>
    )
}

export default Footer