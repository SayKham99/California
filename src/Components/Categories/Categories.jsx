import React from 'react'
import styles from './Categories.module.scss'
import Phone from '../../Assets/Images/categoryPhone.png'
import Laptop from '../../Assets/Images/categoryLaptop.png'
import Ipad from '../../Assets/Images/categoryIpad.png'
import Watch from '../../Assets/Images/categoryWatch.png'
function Categories() {
    return (
        <section className={styles.section}>
            <div className={styles.cards}>
                <div className={styles.cardItems}>
                    <img src={Laptop} alt="" />
                    <div className={styles.text}>
                        <span>laptop</span>
                        <h2>True Laptop <br /> Solutions</h2>
                    </div>
                </div>
                <div className={styles.cardItems}>
                    <img src={Phone} alt="" />
                    <div className={styles.text}>
                        <span>Phones</span>
                        <h2>Your day to day <br /> life</h2>
                    </div>
                </div>
                <div className={styles.cardItems}>
                    <div className={styles.text}>
                        <span>Tablets</span>
                        <h2>Empower your <br /> work</h2>
                    </div>
                    <img src={Ipad} alt="" />
                </div>
                <div className={styles.cardItems}>
                    <img src={Watch} alt="" />
                    <div className={styles.text}>
                        <span>watch</span>
                        <h2>Not just <br /> stylish</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories