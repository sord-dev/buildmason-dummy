import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFieldTime,
} from "react-icons/ai";

function FooterList({ title, links }) {
  const chooseIcon = (label, size) => {
    const sample = label.toLowerCase();
    if (sample == "email") return <AiOutlineMail size={size} />;
    if (sample == "phone") return <AiOutlinePhone size={size} />;
    if (sample == "working hours") return <AiOutlineFieldTime size={size} />;
  };

  return (
    <div className={styles.footer_list}>
      <h3>{title}</h3>
      <div className={styles.line}></div>
      <div className={styles.link_list}>
        {links.map((link) => {
          // if the url is undefined it'll render just the label
          if (link.url == "undefined" || link.url == undefined) {
            // if the link is declared as contact it will render contact points with styles
            if (link.contact) {
              return (
                // contact styles here
                <div key={link.label} className={styles.contact_item}>
                  {chooseIcon(link.label, 30)}
                  <span>
                    {" "}
                    <p>{link.label} </p> {link.detail}{" "}
                  </span>
                </div>
              );
            }
            return <p key={link.label}>{link.label}</p>;
          }

          return (
            <Link to={link.url} key={link.url}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

FooterList.defaultProps = {
  title: "enter title",
  links: [
    {
      label: "give me an array, I'll map over it for you",
      url: "undefined",
    },
  ],
};

export default FooterList;
