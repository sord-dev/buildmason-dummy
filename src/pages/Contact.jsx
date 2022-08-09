import React from "react";
import styles from "../styles/contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.boxes}>
          <div>
            <h2>Phone</h2>
          </div>
          <div>
            <h2>Email</h2>
          </div>
          <div>
            <h2>Location</h2>
          </div>
        </div>

        <div className={styles.form_container}>
          <form>
            <h2>Need our Help?</h2>

            <input type="text" name="name" placeholder="Enter Name" />
            <input type="text" name="name" placeholder="Enter Email" />

            <textarea />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
