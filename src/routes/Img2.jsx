import React from "react";
import image from "../components/imgs/pexels-nao-triponez-792199.jpg";
import { Link } from "react-router-dom";

const Img2 = () => {
  return (
    <div>
      <img src={image} loading="lazy"></img>
      <Link to="/">
        <h1
          style={{
            padding: "1rem",
          }}
        >
          {" "}
          Retornar a página inicial{" "}
        </h1>
      </Link>
    </div>
  );
};

export default Img2;
