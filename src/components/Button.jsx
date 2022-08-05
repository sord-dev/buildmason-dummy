import React from "react";
import styles from "../styles/button.module.css";

function Button({ text, color }) {
  const selection = color == "primary" ? styles.orange : styles.blue ;

  return <button className={`${styles.btn} ${selection}`}> {text} </button>;
}

export default Button;
