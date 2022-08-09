import React from "react";
import styles from "../styles/componentstyles/cta_middle.module.css";
import Button from "./Button";

function CTAMiddle({title, subtitle, btntxt, btnlocation, btncolor}) {
  return (
    <div className={styles.cta_middle}>
      <div>
        <h2>{title}</h2>
        <p>
          {subtitle}
        </p>
        <Button location={btnlocation} text={btntxt} color={btncolor} />
      </div>
    </div>
  );
}

export default CTAMiddle;
