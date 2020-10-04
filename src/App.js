import React, { useState } from 'react';
import Nav from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Project';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [pages] = useState(["about me", "porfolio", "contact", "resume"]);
  const [pageSelected, setPageSelected] = useState(pages[0]);

  return (
    <div>
      <Nav setPageSelected={setPageSelected}></Nav>
      <Header/>
      <main>
        {(pageSelected === "about me") && <About />}
        {(pageSelected === "portfolio") && <Portfolio />}
        {(pageSelected === "contact") && <Contact />}
        {(pageSelected === "resume") && <Resume />}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
