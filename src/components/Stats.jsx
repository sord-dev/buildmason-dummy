import React from 'react'
import styles from '../styles/componentstyles/stats.module.css'

function Stats() {
  return (
    <div className={styles.stats}>
    <p>Our numbers</p>
    <h2>We've worked all over England.</h2>
    <p>
     During our short time as a company, we have already helped so many people and expanded our operations to all over England. Come and be a part of our happiest customers! 
    </p>

    <div className={styles.stats_numbers}>
      <div>
        <h3>1200</h3>
        <p>Clients Helped</p>
      </div>
      <div>
        <h3>120</h3>
        <p>Companies worked with</p>
      </div>
      <div>
        <h3>24,000</h3>
        <p>Happy people</p>
      </div>
    </div>
  </div>
  )
}

export default Stats