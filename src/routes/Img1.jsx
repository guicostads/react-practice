import React from "react";
import image from "../imgs/pexels-mikhail-nilov-6963945.jpg";
import { Link } from "react-router-dom";

const Img1 = () => {
  return (
    <div>
      <img src={image} alt="strange guy"></img>
      <Link to="/">
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

export default Img1;
