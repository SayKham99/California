import React from 'react'
import styles from './Bests.module.scss'
import Watch from '../../Assets/Images/Watch.png'
import PL from '../../Assets/Images/PhoneLaptop.png'
import Eco from '../../Assets/Images/EcoSystem.png'

function Bests() {
    return (
        <section className={styles.bests}>
            <div className={styles.cards}>
                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <p className={styles.smallTitle}>
                            Smart light bulb pack
                        </p>
                        <h1 className={styles.title}>
                            Latest and gratest
                        </h1>
                        <button className={styles.btn}>
                            Explore
                        </button>
                    </div>
                    <div className={styles.itemBody}>
                        <img src={Watch} alt="Watch" />
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <p className={styles.smallTitle}>
                            Smart light bulb pack
                        </p>
                        <h1 className={styles.title}>
                            Best selling
                        </h1>
                        <button className={styles.btn}>
                            Explore
                        </button>
                    </div>
                    <div className={styles.itemBody}>
                        <img src={Eco} alt="Watch" />
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <p className={styles.smallTitle}>
                            Smart light bulb pack
                        </p>
                        <h1 className={styles.title}>
                            Every product
                        </h1>
                        <button className={styles.btn}>
                            Explore
                        </button>
                    </div>
                    <div className={styles.itemBody}>
                        <img src={PL} alt="Watch" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bests