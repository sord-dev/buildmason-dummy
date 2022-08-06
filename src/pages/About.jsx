import React from "react";
import styles from "../styles/about.module.css";

// TODO

// add content

function About() {
  return (
    <div className={styles.about}>

    {/* now that's an easy hero image */}
      <div className={styles.image}>
        <div className={styles.content}>
          <h1>Who we are</h1>
        </div>
      </div>

      <div className={styles.container}>

      <div className={styles.headDesc}>
        <p>Our Story</p>
        <h2>Helping clients get the projects they deserve done.</h2>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, odio praesentium necessitatibus ipsam explicabo autem adipisci excepturi magnam, eius maxime illum sit animi expedita suscipit laudantium ea! Reprehenderit voluptatibus suscipit iusto dolore quos quia, doloribus, blanditiis cupiditate, fuga distinctio corporis.</p>
      </div>


      <div className={styles.headDesc}>
        <p>Our Team</p>
        <h2>The leadership team</h2>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, odio praesentium necessitatibus ipsam explicabo autem adipisci excepturi magnam, eius maxime illum sit animi expedita suscipit laudantium ea! Reprehenderit voluptatibus suscipit iusto dolore quos quia, doloribus, blanditiis cupiditate, fuga distinctio corporis.</p>
      </div>

      </div>

      

    </div>
  );
}

export default About;
