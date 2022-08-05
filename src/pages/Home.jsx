import React from "react";

// styles
import styles from "../styles/home.module.css";

//components
import Hero from "../components/Hero";
import ImageDesc from "../components/ImageDesc";
import Testimonials from "../components/Testimonials";

//images
import heroImage from "../assets/herophotounedited.png";
import aboutImage from "../assets/about-image.jpg";
import servicesImage from "../assets/services_image.jpg";


//TODO

// make testimonials customisable and responsive

// testimonial grid items 

// add last cta at the bottom of the page

// change thickness of navbar and possibly logo size (smaller)

// add better content


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
          ctaText={"Our Story"}
          aboutImage={aboutImage}
        />

        <Testimonials />

        <ImageDesc
          title={"Unmatched Plumbing and Electrical Services."}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua."
          }
          ctaText={"Need Help?"}
          aboutImage={servicesImage}
          flip
        />
      </div>
    </div>
  );
}

export default Home;
