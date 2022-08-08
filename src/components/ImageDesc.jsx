import React from "react";
import styles from "../styles/imagedesc.module.css";
import Button from "../components/Button";

function ImageDesc({ title, content, ctaText, aboutImage, flip, ctaLocation }) {
  const reverse = (flip) => (flip ? styles.flip : styles.normal);
  

  return (
    <div className={`${styles.about} ${reverse(flip)} `}>
      <img src={aboutImage} alt="about image" />

      <div>
        <h1>{title}</h1>
        <p>{content}</p>

        <Button location={ctaLocation} text={ctaText} color={"secondary"} />
      </div>
    </div>
  );
}

export default ImageDesc;
