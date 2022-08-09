import React from 'react'
import GridItem from './GridItem'
import styles from '../styles/componentstyles/testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testimonials}>
          <h2>Don't take our word for it</h2>

          <div className={styles.grid}>
            <GridItem />

            <GridItem />

            <GridItem />

            <GridItem />
          </div>
        </div>
  )
}

export default Testimonials