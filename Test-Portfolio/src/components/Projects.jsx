import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import DigitalClockPreview from "../projectPreview/components/DigitalClockPreview";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects__grid">
        <ProjectCard 
          Renders={<DigitalClockPreview/>}
          title="Digital Clock" 
          description="A simple digital clock built with React.js" 
          demoLink="/digital-clock" 
          codeLink="#" 
        />
        <ProjectCard 
          Renders={<DigitalClockPreview/>}
          title="Todo-List" 
          description="A Todo-List App to keep track of works" 
          demoLink="#" 
          codeLink="#" 
        />
        <ProjectCard 
          Renders={<DigitalClockPreview/>}
          title="Stopwatch" 
          description="A stopwatch app with start/stop functionality" 
          demoLink="#" 
          codeLink="#" 
        />
        <ProjectCard 
          Renders={<DigitalClockPreview/>}
          title="Rock-Paper-Scissors" 
          description="A game of Rock, Paper, Scissors with basic logic" 
          demoLink="#" 
          codeLink="#" 
        />
        <ProjectCard 
          Renders={<DigitalClockPreview/>}
          title="Coin-Flip-Game" 
          description="A game of Coin-Flip with basic logic" 
          demoLink="#" 
          codeLink="#" 
        />
        <ProjectCard 
          Renders={<DigitalClockPreview/>}
          title="Calculator" 
          description="A simple calculator performing basic arithmetic tasks" 
          demoLink="#" 
          codeLink="#" 
        />
      </div>
    </section>
  );
}

export default Projects;
