//hook
import React from "react";

function Nav(props) {

  const {
    setPageSelected
  } = props;

  console.log(props, "coming from nav");
  return (
    <nav>
      <ul className="flex-row">
        <li className={`mx-2 ${true ? 'active' : ''}`}>
          <a data-testid="about" href="#about" onClick={() => setPageSelected("about me")}>
            About me
            </a>
        </li>
        <li className="mx-2">
          <a data-testid="portfolio" href="#portfolio" onClick={() => setPageSelected("portfolio")}>
            Portfolio
            </a>
        </li>
        <li className="mx-2">
          <a data-testid="contact" href="#contact" onClick={() => setPageSelected("contact")}>
            Contact
            </a>
        </li>
        <li className="mx-2">
          <a data-testid="resume" href="#resume" onClick={() => setPageSelected("resume")}>
            Resume
            </a>
        </li>

      </ul>
    </nav>
  );
}

export default Nav;