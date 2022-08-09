import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/componentstyles/hero.module.css'

function Hero({ title, subtitle }) {
  const navigate = useNavigate()
  
  return (
    <div className={styles.hero}>

    <div className={styles.hero_content}>
      <h1>{title}</h1>
      <h3>
        {subtitle}
      </h3>

      <div>
      <button onClick={() => navigate('/services', { replace: true })} >Our Services</button>
      <a href="https://github.com/sord-dev" target='_blank' ><button>Get a Quote</button></a>
    </div>
    </div>

  </div>
  )
}

export default Hero