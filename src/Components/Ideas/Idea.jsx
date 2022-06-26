import React from 'react'
import styles from './Idea.module.scss'
import Book from '../../Assets/Images/Book.png'
function Idea() {
    return (
        <section className={styles.idea}>
            <div className={styles.img}>
                <img src={ Book } alt="Book" />
            </div>
            <div className={styles.about}>
                <p>
                    We Make It Easy To Find The Great Design Talent, Easier...
                    <br /><br />
                    Road Design Handbook For The International Road...
                    <br /><br />
                    The Best Kept Secrets About Creative People
                    <br /><br />
                    We Make It Easy To Find The Great Design Talent, Easier...
                    <br /><br />
                </p>
            </div>
        </section>
    )
}

export default Idea