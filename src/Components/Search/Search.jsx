import React from 'react'
import styles from './Search.module.scss'
// import src from '../../Assets/Icons/search.svg'
import Eco from '../../Assets/Images/EcoSystem.png'
import { NavLink } from 'react-router-dom';
function Search() {

    const Buttons = [
        { id: 1, name: 'Iphone' },
        { id: 2, name: 'Charger' },
        { id: 3, name: 'Gift' },
        { id: 4, name: 'Google Pixel 3' },
        { id: 5, name: 'Keyboard' },
        { id: 6, name: '13 Pro Max' },
        { id: 7, name: 'iPhone 12' },
        { id: 8, name: 'Laptop' },
        { id: 9, name: 'Mobile' },
    ];

    return (
        <section className={styles.search}>
            <input type={'text'} className={styles.input} placeholder={'Search keyword'} />
            <div className={styles.btns}>
                {Buttons.map((btn) => (
                    <NavLink key={btn.id} to={`/${btn.name}`}>
                        <button id={btn.id} className={styles.btn}>
                            {btn.name}
                        </button>
                    </NavLink>
                ))}
            </div>
            <div className={styles.about}>
                <h1 className={styles.title}>
                    Never miss a thing
                </h1>
                <p className={styles.titleDescr}>
                    Sign up for texts to be notified about our best offers on the perfect gifts.
                </p>
                <img src={Eco} alt="Eco" />
                <div className={styles.InpG}>
                    <input type="text" placeholder={'Your Email'} />
                    <button type='submit'>SingUp</button>
                </div>
            </div>
        </section>
    )
}

export default Search