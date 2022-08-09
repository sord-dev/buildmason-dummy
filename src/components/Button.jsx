import React from "react";
import styles from "../styles/componentstyles/button.module.css";
import { useNavigate } from 'react-router-dom'


function Button({ text, color, location }) {
  const navigate = useNavigate()
  const selection = color == "primary" ? styles.orange : styles.blue ;

  return <button onClick={() => navigate(location, { replace: true })} className={`${styles.btn} ${selection}`}> {text} </button>;
}

export default Button;
