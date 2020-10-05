import React from "react";
import Nav from '../../components/Navigation';

function Header(props) {

  const {
    pageSelected,
    setPageSelected
  } = props;

  return (
      <header className="flex-row px-1">
        <h2>
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera"></span> Jennifer Mulder, CPA
      </a>
        </h2>
        <Nav PageSelected={pageSelected}
          setPageSelected={setPageSelected}/>
      </header>
  );
}

export default Header;