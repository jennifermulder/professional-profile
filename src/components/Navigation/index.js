//hook
import React from "react";

function Nav(props) {

  const {
    setPageSelected
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"></span> Jennifer Mulder, CPA
    </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
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
    </header>
  );
}

export default Nav;