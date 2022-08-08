import React from 'react'
import styles from '../styles/hero.module.css'

function Hero({ imgUrl, title, subtitle }) {
  return (
    <div className={styles.hero}>

    <div className={styles.hero_content}>
      <h1>{title}</h1>
      <h3>
        {subtitle}
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