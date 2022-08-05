import React from 'react'
import styles from '../styles/hero.module.css'

function Hero({ imgUrl }) {
  return (
    <div className={styles.hero}>
    <img src={imgUrl} alt="hero picture" />

    <div className={styles.hero_content}>
      <h1>Fast and reliable contracting services</h1>
      <h3>
        We value Hardy designs, committed work and fast delivery. Get a
        quote today and have your dream house built within months.
      </h3>

      <div>
      <button>Our Services</button>
      <button>Get a Quote</button>
    </div>
    </div>

  </div>
  )
}

export default Hero