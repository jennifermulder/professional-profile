import React from 'react';
import Project from '../Project';


function Portfolio() {
  const [projects] = [
    {
      name: 'portfolio',
      languages: "HTML, JS, CSS",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: "./assets/images/0.jpg"
    },
    {
      name: 'portfolio 2',
      languages: "HTML, ",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: "./assets/images/0.jpg"
    },
    {
      name: 'portfolio 23',
      languages: "JS, CSS",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: ".assets/images/1.jpg"
    },
  ]

  return (
    <section>
      <h1>Portfolio</h1> {
        projects.map((project) => (
          <Project
            key={project.project}
            project={project}
          />
        ))}
    </section>
  );
}

export default Portfolio;