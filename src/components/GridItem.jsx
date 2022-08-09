import React from "react";
import styles from "../styles/componentstyles/testimonials.module.css";

function GridItem({name, location, statement}) {
  return (
    <div className={styles.gridItem}>
      {/* left */}
      <div>
        <div className={styles.avatar}></div>
        <p>{name}</p>
        <p>{location}</p>
      </div>

      {/* right */}

      <div>
        <p>
          {statement}
        </p>
      </div>
    </div>
  );
}

export default GridItem;
