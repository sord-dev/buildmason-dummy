import React from "react";
import styles from "../styles/componentstyles/team.module.css";
import HeadingText from "./HeadingText";

function Team() {
  return (
    <div className={styles.team}>
      <HeadingText
        title={"The leadership team"}
        subtitle={"Our Team"}
        desc={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, odio praesentium necessitatibus ipsam explicabo autem adipisci excepturi magnam, eius maxime illum sit animi expedita suscipit laudantium ea! Reprehenderit voluptatibus suscipit iusto dolore quos quia, doloribus, blanditiis cupiditate, fuga distinctio corporis."
        }
      />

      <div className={styles.imageGrid}>
        <div>
          <div></div>
          <h4>Random Dude</h4>
          <p>Random Position</p>
        </div>

        <div>
          <div></div>
          <h4>Random Dude</h4>
          <p>Random Position</p>
        </div>

        <div>
          <div></div>
          <h4>Random Dude</h4>
          <p>Random Position</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
