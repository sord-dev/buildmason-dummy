import React from "react";
import styles from "../styles/headingtext.module.css";

function HeadingText({ title, subtitle, desc }) {
  return (
    <div className={styles.headDesc}>
      <p>{subtitle}</p>
      <h2>{title}</h2>

      <p>{desc}</p>
    </div>
  );
}

export default HeadingText;
