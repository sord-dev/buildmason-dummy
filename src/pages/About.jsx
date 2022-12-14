import React from "react";

//styles
import styles from "../styles/about.module.css";

//components
import HeadingText from "../components/HeadingText";
import Stats from "../components/Stats";
import Team from "../components/Team";
import CTAMiddle from "../components/CTAMiddle"

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
        <HeadingText
          title={"Helping clients get the projects they deserve done."}
          subtitle={"Our Story"}
          desc={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, odio praesentium necessitatibus ipsam explicabo autem adipisci excepturi magnam, eius maxime illum sit animi expedita suscipit laudantium ea! Reprehenderit voluptatibus suscipit iusto dolore quos quia, doloribus, blanditiis cupiditate, fuga distinctio corporis."
          }
        />

        <Stats />

        <Team />

        <CTAMiddle title={'Still questioning?'} subtitle={'Before making any decicions get a quote and report for free.'} btnlocation={'/'} btntxt={'Get a Quote'} />
      </div>
    </div>
  );
}

export default About;
