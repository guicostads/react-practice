import React from "react";
import image from "../imgs/pexels-soumil-kumar-735911.jpg";
import { Link } from "react-router-dom";

const Img3 = () => {
  return (
    <div>
      <img src={image}></img>
      <Link to="/">
        {" "}
        <h1
          style={{
            padding: "1rem",
          }}
        >
          Retornar a página inicial
        </h1>
      </Link>
    </div>
  );
};

export default Img3;
