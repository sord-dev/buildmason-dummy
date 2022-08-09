import React from "react";
import styles from "../styles/contact.module.css";

// NOTE 
// -- THIS FORM ISN'T FUNCTIONAL BECAUSE THIS IS A FICTIONAL COMPANY --


// TODO 
// IDEA - MAKE THE DIV A COMPONENT AND THEN PASS THE CONTENT AS PROPS
// ADD LINKS TO EACH DIV
// MAKE PAGE RESPONSIVE

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.boxes}>

          <div>
            <h2>Phone</h2>
            <h3>02073619831</h3>
            <span>add link to the div</span>
          </div>

          <div>
            <h2>Email</h2>
            <h3>someone@somewhere.com</h3>
            <span>add link to the div</span>
          </div>

          <div>
            <h2>Location</h2>
            <h3>Random Postcode</h3>
            <p>Mon - Fri 6am till 9pm</p>
            <span>add link to the div</span>
          </div>

        </div>

        <div className={styles.form_container}>
          <form>
            <h2>Need our Help?</h2>
            <p>Tell us a bit about your issue in this form and we'll get back to you within the day!</p>

            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />

            <textarea placeholder="Message" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
