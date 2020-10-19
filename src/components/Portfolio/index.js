import React from 'react';
import Project from '../Project';
import hikefinder from "../../assets/images/hike-finder.jpg";
import money from "../../assets/images/money-money-money.jpg";
import nogginbloggin from "../../assets/images/noggin-bloggin1.jpg";
import passwordgenerator from "../../assets/images/password-generator-markup.jpg";
import safr from "../../assets/images/safr1.jpg";
import weatherdashboard from "../../assets/images/weather-dashboard.jpg";
import '../../App.css';


function Portfolio() {
  const projects = [
    {
      name: 'Hike Finder',
      languages: "HTML, CSS, Javascript",
      description: "HIKE FINDER is an easy to use mobile friendly website that allows the user to find a hike in a location of their choosing by zip code, or even a specific hike name. Users can see important details about the hike such as length, altitude, weather conditions, ratings, and more. Users are also presented with a gear checklist allowing them to determine necessary preparation, including whether to take advantage of the handy storefinder feature! HIKE FINDER provides a list of sporting good stores near the user's hike or another desired location to help the user ensure they have everything they need.",
      src: hikefinder,
      deployed: "https://jennifermulder.github.io/explore/",
      github: "https://github.com/jennifermulder/explore"
    },
    {
      name: 'Safr',
      languages: "HTML, CSS, Javascript, SQL ",
      description: "CMS-style blog site where users can publish posts, reviews, and safety measures offered by various businesses during COVID-19. Mobile friendly website that allows the users to get up-to-date information regarding dining, entertainment, and the outdoors.",
      src: safr,
      deployed: "https://ssafr.herokuapp.com/login",
      github: "https://github.com/NGDino/safety-first"
    },
    {
      name: 'Noggin Bloggin',
      languages: "HTML, CSS, Javascript",
      description: 'CMS-style blog site where users can publish articles, blog posts, and thoughts/ opinions. When logged in, the user can create new posts and edit them, as well as comment on the posts of other users. For whatever reason a post is no longer relevant, the use can easily delete their work with the click of a button.',
      src: nogginbloggin,
      deployed: "https://serene-inlet-06032.herokuapp.com/",
      github: "https://github.com/jennifermulder/noggin-bloggin"
    },
    {
      name: 'BudgetSmart',
      languages: "HTML, JS, CSS",
      description: 'Built with ReactJs, this smart budgeter allows users to view their current budget transactions. They can input an expense or a deposit when they are not connected to the internet, and will be notified of the completed trasaction update once connection is reestablished. ',
      src: money,
      deployed: "https://jennifermulder.github.io/food-festival/",
      github: "https://github.com/jennifermulder/myteam-generator"
    },
    {
      name: 'Fair Weather',
      languages: "HTML, CSS, Javascript",
      description: "This weather dashboard shows the current day's weather as well as the upcoming five-day forecast. Upon entering the desired city into the search bar, the user is easily able to see an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index. Icons of weather conditions help the user easily interpret the weather conditions at a glance. Each city search is stored to be able to be used for future searches, in which the user simply has to click the city button to regenerate the information!",
      src: weatherdashboard,
      deployed: "https://jennifer.mulder.github.io/fair-weather/",
      github: "https://github.com/jennifermulder/fair-weather"
    },
    {
      name: 'Random Password Generator',
      languages: "CSS, Javascript",
      description: 'Random password generator, providing the user with a password with the desired length and character criteria (uppercase, lowercase, special characters).',
      src: passwordgenerator,
      deployed: "https://jennifer.mulder.github.io/random-password/",
      github: "https://github.com/jennifermulder/random-password"
    },
  ]

  return (
    <section className="container bg-text">
      <h2 id="portfolio">Portfolio</h2> {
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