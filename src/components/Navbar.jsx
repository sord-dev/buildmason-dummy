import React from "react";
import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav_container}>
        <h1 className={styles.nav_title}> <Link to='/'> Buildmason </Link> </h1>

        <div className={styles.nav_actions}>
          <Link to={"/services"}>Services</Link>
          <Link to={"/about"}>Who we are</Link>
          <Link to={"/contact"}>Contact</Link>

          <Button text={'Get a Quote'} color={'primary'} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
