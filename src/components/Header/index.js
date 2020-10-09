import React from "react";
import Nav from '../../components/Navigation';
import '../../App.css';

function Header(props) {

  const {
    pageSelected,
    setPageSelected
  } = props;

  return (
    <header className="flex-row px-1 black">
      <h2 id="header">
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"></span> Jennifer Mulder, CPA
      </a>
      </h2>
      <Nav pageSelected={pageSelected}
        setPageSelected={setPageSelected} />
    </header>
  );
}

export default Header;