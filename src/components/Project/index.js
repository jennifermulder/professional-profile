import React from 'react';
// import './style.css';

const Project = ({ project }) => {

  return (
    <div>
      <div className="flex-row">
        <h1>{project.name}</h1>
        <h4>{project.languages}</h4>
        <p>{project.description}</p>
        <img src={project.src} alt='{project.name} project'/>
      </div>
    </div>
  );
};

export default Project;