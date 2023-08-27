import React from 'react';
import "./Projects.css";
import projectData from "../Data/JsonFiles/projects.json"
import ProjectItem from './ProjectItem';
function Projects() {
  return (
    <div className='projects-container'>
      { projectData.map((project, index) => (
        <div className='each-project-width'>
          <ProjectItem 
            title = {project.title}
            image = {project.imagen}
            content = {project.content}
            gitHubUrl = {project.gitHubUrl}
            description = {project.description}
            techStack = {project.techStack}
            key = {index}
          />
        </div>
      ) )}
    </div>
  )
}

export default Projects
