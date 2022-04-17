import React from "react";
import Packages from "../Packages/Packages";
import Services from "../Services/Services";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <>
      <Carousel></Carousel>
      <Services></Services>
      <Packages></Packages>
    </>
  );
};

export default Home;
