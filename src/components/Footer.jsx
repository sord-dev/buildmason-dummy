import React from "react";
import styles from "../styles/footer.module.css";
import FooterList from "./FooterList";

const serviceLinks = [
  {
    label: "Home Construction",
    url: "/services#construction",
  },
  {
    label: "Demolition",
    url: "/services#demolition",
  },
  {
    label: "Electirical Installation",
    url: "/services#electirics",
  },
  {
    label: "Plumbing",
    url: "/services#plumbing",
  },
];

const aboutLinks = [
  {
    label: "About us",
    url: "/about",
  },
  {
    label: "FAQ",
    url: "/about#faq",
  },
];

const contactLinks = [
  {
    label: "Email",
    url: "undefined",
    contact: "true",
    detail: "someone@somewhere.com",
  },
  {
    label: "Phone",
    url: "undefined",
    contact: "true",
    detail: "02073619831",
  },
  {
    label: "Working Hours",
    url: "undefined",
    contact: "true",
    detail: "Mon - Fri 6am till 9pm",
  },
];

const areas = [
  {
    label: "London",
    url: "undefined",
  },
  {
    label: "Greater London",
    url: "undefined",
  },
  {
    label: "Scottland",
    url: "undefined",
  },
  {
    label: "Whales",
    url: "undefined",
  },
];

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>

      <div className={styles.footer_links}>
      
        <FooterList title={"Services"} links={serviceLinks} />
        <FooterList title={"Who we are"} links={aboutLinks} />
        <FooterList title={"Areas Covered"} links={areas} />
        <FooterList title={"Contact"} links={contactLinks} />

      </div>
      

        <span className={styles.watermark}> Copyright &copy; 2022 - Buildmason All Rights Reserved, <a href="https://stackoverflow.com/questions/43768629/how-to-scale-large-font-awesome-icons-from-the-react-icons-package">Privicy Policy</a> </span>
      </div>
    </div>
  );
}

export default Footer;
