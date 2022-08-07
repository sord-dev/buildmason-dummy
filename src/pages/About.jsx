import React from "react";
import HeadingText from "../components/HeadingText";
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


      <HeadingText title={'Helping clients get the projects they deserve done.'} subtitle={'Our Story'}  desc={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, odio praesentium necessitatibus ipsam explicabo autem adipisci excepturi magnam, eius maxime illum sit animi expedita suscipit laudantium ea! Reprehenderit voluptatibus suscipit iusto dolore quos quia, doloribus, blanditiis cupiditate, fuga distinctio corporis.'} />

      <div className={styles.stats}>
        <p>Our numbers</p>
        <h2>Handshake infographic mass market crowdfunding iteration.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum saepe architecto eum, cumque cum error quos autem ut tempora minima ullam ex repellat voluptatem placeat quam aperiam aspernatur fuga.</p>

        

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
