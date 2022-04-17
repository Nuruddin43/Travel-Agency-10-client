import React from "react";
import { useParams } from "react-router-dom";

const DestinationDetail = () => {
  const { destinationId } = useParams();
  return (
    <div>
      <h2>Welcome to detail: {destinationId}</h2>
    </div>
  );
};

export default DestinationDetail;
