import React from "react";
import { Button, Card } from "react-bootstrap";

const Package = ({ p }) => {
  const { name, img, price, description } = p;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 p-2 text-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>${price}</p>
          <p className="card-text">{description}</p>
          <Button style={{ backgroundColor: "#FF9C34", border: "none" }}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Package;
