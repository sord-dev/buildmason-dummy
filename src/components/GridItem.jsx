import React from "react";
import styles from "../styles/testimonials.module.css";

function GridItem() {
  return (
    <div className={styles.gridItem}>
      {/* left */}
      <div>
        <span>icon</span>
        <p>name</p>
        <p>location</p>
      </div>

      {/* right */}

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quis harum
          quas ipsam officiis laboriosam? Explicabo repellendus illum voluptate
          voluptatem ab ea corrupti odio iusto fugit dolore. Possimus, magni
          nisi.
        </p>
      </div>
    </div>
  );
}

export default GridItem;
