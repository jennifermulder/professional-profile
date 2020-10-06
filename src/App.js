import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [pages] = useState(["about me", "portfolio", "contact", "resume"]);
  const [pageSelected, setPageSelected] = useState(pages[0]);

  return (
    <div>
      <Header pageSelected={pageSelected}
        setPageSelected={setPageSelected} />
      <main className="light-blue darken-4">
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
