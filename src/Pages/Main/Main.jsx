import React from 'react'
import Bests from '../../Components/Bests/Bests'
import Categories from '../../Components/Categories/Categories'
import Feature from '../../Components/Features/Feature'
import Header from '../../Components/Header/Header'
import Idea from '../../Components/Ideas/Idea'
import Navbar from '../../Components/Navbar/Navbar'
import Arrow from '../../Assets/Icons/Arrow.svg'
import styles from './Main.module.scss'
import Search from '../../Components/Search/Search'
import Footer from '../../Components/Footer/Footer'

function Main() {
  return (
    <>
      <div className={styles.wrapper}>
        <Navbar />
        <Header />
        <div className={styles.text}>
          <h1 className={styles.title}>Shop our latest offers and categories</h1>
          <p className={styles.titleDescr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam,
            <br />
            tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Categories />
        <div className={styles.text}>
          <h1 className={styles.title}>
            Save on our most selled items.
          </h1>
          <p className={styles.titleDescr}>
            Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
          </p>
        </div>
        <Feature />
        <div className={styles.text}>
          <h1 className={styles.title}>
            See the best around here
          </h1>
          <p className={styles.titleDescr}>
            Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
          </p>
        </div>
        <Bests />
        <div className={styles.text}>
          <h1 className={styles.title}>
            Ideas have a place here
          </h1>
          <p className={styles.titleDescr}>
            Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
          </p>
        </div>
        <Idea />
        <p className={styles.see}>See All <img src={Arrow} alt="Arrow" /> </p>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Looking for anything else?
          </h1>
          <Search />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Main