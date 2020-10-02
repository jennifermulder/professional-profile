import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      <About>About Me</About>
      <Project>Portfolio</Project>
        {!contactSelected ? (
          <>
            <Contact>Contact</Contact>            
          </>
        ) : (
          <Resume></Resume>
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
