import "./Projects.css";
import { Link } from "react-router-dom";
import imageOne from "../components/imgs/pexels-mikhail-nilov-6963945.jpg";
import imageTwo from "../components/imgs/pexels-nao-triponez-792199.jpg";
import imageThree from "../components/imgs/pexels-soumil-kumar-735911.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <div>
        <Link to="/image1">
          <img src={imageOne}></img>
        </Link>
      </div>
      <div>
        <Link to="/image2">
          <img src={imageTwo}></img>
        </Link>
      </div>
      <div>
        <Link to="/image3">
          <img src={imageThree}></img>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
