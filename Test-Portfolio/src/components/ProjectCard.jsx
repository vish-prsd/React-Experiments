import React from "react";
import {Link} from "react-router-dom"
import "../styles/ProjectCard.css";

function ProjectCard({ title, description, demoLink, codeLink,Renders }) {
  return (
    <div className="projectCard">
      <div className="projectPreview">
       {Renders}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <a href={demoLink} target="_blank" rel="noopener noreferrer">View Demo</a> */}

      <Link to={demoLink} className="demo-link">View Demo</Link>
      <a href= "https://github.com/vish-prsd/React-Experiments/tree/main/DigitalClock" target="_blank" rel="noopener noreferrer">View Code</a>
    </div>
  );
}

export default ProjectCard;
