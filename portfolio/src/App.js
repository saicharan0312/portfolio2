import React, { useRef, useState } from 'react';
import ManiNavigation from './Navigation/ManiNavigation';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Projects from './Components/Projects';

function App() {
  const [pageName, setPageName] = useState("Home");

  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  const HandleClick = (presentPage) => {
    setPageName(presentPage);

    if (presentPage === "home") {
      homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (presentPage === "education") {
      educationRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (presentPage === "skills") {
      skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (presentPage === "projects") {
      projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (presentPage === "experience") {
      experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <ManiNavigation 
        HandleClick={HandleClick}
        pageName={pageName}
      />
      <div ref={homeRef}><Home /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><Projects /></div>
      <div style={{ width : "100%" }} ref={experienceRef}><Experience /></div>
    </div>
  );
}

export default App;
