import React from 'react';
import Project from '../Project';
import image0 from "../../assets/images/0.jpg";
// import image0 from "../../assets/images/0.jpg";
// import image0 from "../../assets/images/0.jpg";
// import image0 from "../../assets/images/0.jpg";
// import image0 from "../../assets/images/0.jpg";
// import image0 from "../../assets/images/0.jpg";
// import image0 from "../../assets/images/0.jpg";
// import image0 from "../../assets/images/0.jpg";
// import image0 from "../../assets/images/0.jpg";
// import image0 from "../../assets/images/0.jpg";
// import image0 from "../../assets/images/0.jpg";


function Portfolio() {
  const projects = [
    {
      name: 'portfolio',
      languages: "HTML, JS, CSS",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: image0,
      deployed: "https://jennifermulder.github.io/food-festival/",
      github: "https://jennifermulder.github.io/food-festival/"
    },
    {
      name: 'portfolio 2',
      languages: "HTML, ",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: image0,
      deployed: "https://jennifermulder.github.io/food-festival/",
      github: "https://jennifermulder.github.io/food-festival/"
    },
    {
      name: 'portfolio 27',
      languages: "JS, CSS",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: image0,
      deployed: "https://jennifermulder.github.io/food-festival/",
      github: "https://jennifermulder.github.io/food-festival/"
    },
    {
      name: 'portfolio 26',
      languages: "JS, CSS",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: image0,
      deployed: "https://jennifermulder.github.io/food-festival/",
      github: "https://jennifermulder.github.io/food-festival/"
    },
    {
      name: 'portfolio 25',
      languages: "JS, CSS",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: image0,
      deployed: "https://jennifermulder.github.io/food-festival/",
      github: "https://jennifermulder.github.io/food-festival/"
    },
    {
      name: 'portfolio 24',
      languages: "JS, CSS",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      src: image0,
      deployed: "https://jennifermulder.github.io/food-festival/",
      github: "https://jennifermulder.github.io/food-festival/"
    },
  ]

  return (
    <section>
      <h1>Portfolio</h1> {
        projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            project={project}
          />
        ))}
    </section>
  );
}

export default Portfolio;