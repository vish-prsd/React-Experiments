import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Certifications from "./components/Certifications.jsx";
import Education from "./components/Education.jsx";

import DigitalClock from "./components/projectComponents/DigitalClock.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />  
        <Routes>
          <Route path = "/" element={
            <>
            <About />
            <Education />
            <Certifications />
            <Projects />
            <Contact />
            </>
          }/>
          <Route path="/digital-clock" element={<DigitalClock />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
