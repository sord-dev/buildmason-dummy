import React from "react";
import styles from "../styles/home.module.css";
import heroImage from "../assets/herophotounedited.png";
import aboutImage from "../assets/about-image.jpg";
import Hero from "../components/Hero";
import ImageDesc from "../components/ImageDesc";

function Home() {
  return (
    <div className={styles.home}>
      <Hero imgUrl={heroImage} />

      <div className={styles.container}>
        <ImageDesc
          title={"Professional and Exprienced Building Contractors"}
          content={
            "Buildmason was established in 2017 by founding director Paulo Costa. With over 15 years of personal experience within the construction industry, his objective is to provide a building service that combines exceptional construction skills with professional and honest customer service."
          }
          ctaText={'Learn More'}
          aboutImage={aboutImage}
        />
      </div>
    </div>
  );
}

export default Home;
