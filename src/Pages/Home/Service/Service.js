import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { name, price, description, ratings, img } = service;
  return (
    <div className="service">
      <Card>
        <Card.Img className="w-100" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>${price}</p>
          <Card.Text>{description}</Card.Text>
          <p>Rating: {ratings}</p>
          <Button style={{ backgroundColor: "#FF9C34", border: "none" }}>
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
