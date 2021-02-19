import React from 'react';
import dataProjects from '../dataProjects/data';
import Project from './project';

const Projects = () => {
  const projectList = dataProjects.map(
    project => (
      <Project project={project} key={project.id} />
    ),
  );
  return (
    <div className="container">
      <hr />
      <br />
      <div className="row">
        <div className="col-12 text-center selected"><p>SELECTED WORK</p></div>
      </div>

      <div className="row contenedor">
        {projectList}
      </div>
    </div>
  );
};

export default Projects;
