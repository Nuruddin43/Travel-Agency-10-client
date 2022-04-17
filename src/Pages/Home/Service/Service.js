import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, description, ratings, img } = service;
  const navigate = useNavigate();

  const navigateToDestinationDetail = (id) => {
    navigate(`/destination/${id}`);
  };
  return (
    <div className="service">
      <Card
        style={{
          position: "sticky",
          top: "0px",
        }}
      >
        <Card.Img className="w-100" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>${price}</p>
          <Card.Text>{description}</Card.Text>
          <p>Rating: {ratings}</p>
          <Button
            onClick={() => navigateToDestinationDetail(id)}
            style={{
              backgroundColor: "#FF9C34",
              border: "none",
            }}
          >
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
