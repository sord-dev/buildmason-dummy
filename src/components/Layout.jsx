import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
