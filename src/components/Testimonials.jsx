import React from 'react'
import GridItem from './GridItem'
import styles from '../styles/componentstyles/testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testimonials}>
          <h2>Don't take our word for it</h2>

          <div className={styles.grid}>
            <GridItem name={'name'} location={'location'} statement={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis harum quas ipsam officiis laboriosam Explicabo repellendus illum voluptate voluptatem ab ea corrupti odio iusto fugit dolore. Possimus, magni nisi.'} />

            <GridItem name={'name'} location={'location'} statement={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis harum quas ipsam officiis laboriosam Explicabo repellendus illum voluptate voluptatem ab ea corrupti odio iusto fugit dolore. Possimus, magni nisi.'} />

            <GridItem name={'name'} location={'location'} statement={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis harum quas ipsam officiis laboriosam Explicabo repellendus illum voluptate voluptatem ab ea corrupti odio iusto fugit dolore. Possimus, magni nisi.'} />

            <GridItem name={'name'} location={'location'} statement={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis harum quas ipsam officiis laboriosam Explicabo repellendus illum voluptate voluptatem ab ea corrupti odio iusto fugit dolore. Possimus, magni nisi.'} />
          </div>
        </div>
  )
}

export default Testimonials