import React from "react";
import styles from "../styles/home.module.css";
import heroImage from "../assets/herophotounedited.png";
import aboutImage from "../assets/about-image.jpg";
import Hero from "../components/Hero";
import Button from "../components/Button";

function Home() {
  return (
    <div className={styles.home}>
      <Hero imgUrl={heroImage} />

      <div className={styles.container}>
        <div className={styles.about}>
          <img src={aboutImage} alt="" />

          <div>
            <h1>Professional and Exprienced Building Contractors</h1>
            <p>
              Buildmason was established in 2017 by founding director Paulo Costa. With over 15 years of personal experience within the
              construction industry, his objective is to provide a building
              service that combines exceptional construction skills with
              professional and honest customer service.{" "}
            </p>

            <Button text={'Learn More'} color={'secondary'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
