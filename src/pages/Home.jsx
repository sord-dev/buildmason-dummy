import React from "react";

// styles
import styles from "../styles/home.module.css";

//components
import Hero from "../components/Hero";
import ImageDesc from "../components/ImageDesc";
import Testimonials from "../components/Testimonials";
import Button from "../components/Button";

//images
import aboutImage from "../assets/about-image.jpg";
import servicesImage from "../assets/services_image.jpg";


//TODO

// make testimonials better

// add dropdown to navbar https://www.youtube.com/watch?v=IF6k0uZuypA

// make buttons navigate you places

// element spacing

function Home() {
  
  return (
    <div className={styles.home}>


      <Hero title={"Fast and reliable contracting services"} subtitle={"We value Hardy designs, committed work and fast delivery. Get a quote today and have your dream house built within months."} />

      <div className={styles.container}>
        <ImageDesc
          title={"Professional and Exprienced Building Contractors"}
          content={
            "Buildmason was established in 2017 by founding director Paulo Costa. With over 15 years of personal experience within the construction industry, his objective is to provide a building service that combines exceptional construction skills with professional and honest customer service."
          }
          ctaText={"Our Story"}
          ctaLocation={'/about'}
          aboutImage={aboutImage}
        />

        <Testimonials />

        <ImageDesc
          title={"Unmatched Plumbing and Electrical Services."}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua."
          }
          ctaText={"What we Offer"}
          ctaLocation={'/services'}
          aboutImage={servicesImage}
          flip
        />

        <div className={styles.cta_middle}>
        <div>
          <h2>Need our Help?</h2>
          <p>Get a quote from us for free and we&apos;ll see how we can get that dream project built.</p>
          <Button location={'/'} text={'Get Free Quote'} color={'primary'}  />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
