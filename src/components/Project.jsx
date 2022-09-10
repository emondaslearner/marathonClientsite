import React from "react";
import projectImage from "../images/Vector (4).svg";
import projectImage1 from "../images/Vector (5).svg";
import projectImage2 from "../images/Vector (6).svg";
import projectImage3 from "../images/School Building.svg";
import projectImage4 from "../images/University.svg";
import runningImage from '../images/g14.svg'

const Project = () => {
  return (
    <>
      <h1 className="ProjectHeading">Our Projects</h1>
      <div className="projects">
        <div className="project">
          <div>
            <img src={projectImage} alt="" />
          </div>
          <h3>Chinmaya Vishwa Vidyapeeth</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu
            consequat eros, dolor sit pellentesque sapien. Tortor lectus integer
            morbi erat.{" "}
          </p>
        </div>
        <div className="project">
          <div>
            <img src={projectImage1} alt="" />
          </div>
          <h3>Chinmaya Vidyalayas</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu
            consequat eros, dolor sit pellentesque sapien. Tortor lectus integer
            morbi erat.{" "}
          </p>
        </div>
        <div className="project">
          <div>
            <img src={projectImage2} alt="" />
          </div>
          <h3> CORD</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu
            consequat eros, dolor sit pellentesque sapien. Tortor lectus integer
            morbi erat.{" "}
          </p>
        </div>
        <div className="ourProject">
          <h1>Our Projects</h1>
        </div>
        <div className="project">
          <div>
            <img src={projectImage3} alt="" />
          </div>
          <h3>Green Initiatives</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu
            consequat eros, dolor sit pellentesque sapien. Tortor lectus integer
            morbi erat.{" "}
          </p>
        </div>
        <div className="project">
          <div>
            <img src={projectImage4} alt="" />
          </div>
          <h3>Healthcare</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu
            consequat eros, dolor sit pellentesque sapien. Tortor lectus integer
            morbi erat.{" "}
          </p>
        </div>
      </div>
      <div className="vector">
        <img src={runningImage} alt="" />
      </div>
    </>
  );
};

export default Project;
