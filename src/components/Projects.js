import React from 'react';
import projects from '../data/projects.json';

function Projects() {
  return (
    <div>
      <h2>Projetos em Destaque</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Tecnologias: {project.technologies}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
