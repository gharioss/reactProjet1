import React, { Fragment } from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";

function Home() {
  return (
    <Fragment>
      <HeroSection />
      <Cards />
      <Footer />
    </Fragment>
  );
}
export default Home;
