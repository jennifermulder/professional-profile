import React from 'react';
// import './style.css';

const Project = ({ project }) => {

  return (
    <a href={project.deployed}>
      <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={project.src} alt='{project.name} project' />
            <span className="card-title">{project.name}</span>
          </div>
          <div className="card-content">
            <p>{project.languages}</p>
            <p>{project.description}</p> <br />
            <a href={project.deployed}>Deployed application</a>
            <a href={project.github}>GitHub repository</a>
          </div>
        </div>
      </div>
    </div>
    </a>
  );
};

export default Project;