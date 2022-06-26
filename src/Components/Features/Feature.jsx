import React from 'react'
import styles from './Feature.module.scss'
import Phone from '../../Assets/Images/Galaxy.png'
import MacBookPro13 from '../../Assets/Images/MacBookPro13.png'
import MacBookAirM1 from '../../Assets/Images/MacBookAirM1.png'
import Ipad from '../../Assets/Images/Ipad.png'

function Feature() {
    return (
        <section className={styles.feature}>
            
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img src={MacBookPro13} alt="MacBookPro13" />
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>
                            MacBook Pro 13
                        </div>
                        <div className={styles.cardDescr}>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                        </div>
                        <div className={styles.price}>
                            $ 1,200.00 USD
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img src={Phone} alt="Phone" />
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>
                            Smart Galaxy Watch 3
                        </div>
                        <div className={styles.cardDescr}>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                        </div>
                        <div className={styles.price}>
                            $ 199.00 USD
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img src={MacBookAirM1} alt="MacBookAirM1" />
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>
                            MacBook Air M1
                        </div>
                        <div className={styles.cardDescr}>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                        </div>
                        <div className={styles.price}>
                            $ 1,009.00 USD
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img src={Ipad} alt="Ipad" />
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>
                            iPad
                        </div>
                        <div className={styles.cardDescr}>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                        </div>
                        <div className={styles.price}>
                            $ 610.00 USD
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature