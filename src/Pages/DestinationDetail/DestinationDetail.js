import React from "react";
import { Link, useParams } from "react-router-dom";

const DestinationDetail = () => {
  const { destinationId } = useParams();
  return (
    <div>
      <h2>Welcome to detail: {destinationId}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button style={{ backgroundColor: "#FF9C34" }}>
            Checkout Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationDetail;
