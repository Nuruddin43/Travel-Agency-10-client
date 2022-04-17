import React from "react";
import error404 from "../../../images/error-404.png";

const NotFound = () => {
  return (
    <div>
      <h2
        style={{ fontSize: "60px", marginTop: "25px" }}
        className="text-center"
      >
        Page is not found{" "}
        <img
          style={{ height: "100px" }}
          className="mx-auto"
          src={error404}
          alt=""
        />
      </h2>
    </div>
  );
};

export default NotFound;
