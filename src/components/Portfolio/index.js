import React from 'react';
import Project from '../Project';
import image0 from "../../assets/images/0.jpg";


function Portfolio() {
  const projects = [
    {
      name: 'portfolio',
      languages: "HTML, JS, CSS",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: image0,
      href: "https://jennifermulder.github.io/food-festival/"
    },
    {
      name: 'portfolio 2',
      languages: "HTML, ",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: image0
    },
    {
      name: 'portfolio 23',
      languages: "JS, CSS",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: image0
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