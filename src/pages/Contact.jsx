import React from 'react'
import styles from '../styles/contact.module.css'

function Contact() {
  return (
    <div className={styles.contact} >

    <div className={styles.container}>
        
        <div className={styles.boxes}>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className={styles.form_container}>
            <form>
            <h1>Need our Help?</h1>

            <input type="text" name='name' placeholder='Enter Name' />
            <input type="text" name='name' placeholder='Enter Email' />

            <textarea />
            </form>
        </div>

    </div>
    
    </div>
  )
}

export default Contact