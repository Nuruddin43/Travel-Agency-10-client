import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/carousel/carousel-1 (2).jpg";
import banner2 from "../../../images/carousel/carousel-2 (2).jpg";
import banner3 from "../../../images/carousel/carousel-4.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      style={{ fontFamily: "cursive" }}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3 style={{ color: "#FF9C34" }}>WELCOME TO FLYWAY</h3>
          <p style={{ fontSize: "30px" }}>BEST WAY TO FIND YOUR DREAM PLACE </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3 style={{ color: "#FF9C34" }}>WELCOME TO FLYWAY</h3>
          <p style={{ fontSize: "30px" }}>BEST WAY TO FIND YOUR DREAM PLACE </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3 style={{ color: "#FF9C34" }}>WELCOME TO FLYWAY</h3>
          <p style={{ fontSize: "30px" }}>BEST WAY TO FIND YOUR DREAM PLACE </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
