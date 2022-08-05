import React from "react";
import styles from "../styles/imagedesc.module.css";
import Button from "../components/Button";

function ImageDesc({ title, content, ctaText, aboutImage, flip }) {
  const reverse = (flip) => {
    if (flip) return styles.flip;
    return styles.normal;
  };
  return (
    <div className={`${styles.about} ${reverse(flip)} `}>
      <img src={aboutImage} alt="" />

      <div>
        <h1>{title}</h1>
        <p>{content}</p>

        <Button text={ctaText} color={"secondary"} />
      </div>
    </div>
  );
}

export default ImageDesc;
