import React, { useState, Suspense } from 'react'
import ManiNavigation from './Navigation/ManiNavigation';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Projects from './Components/Projects';

function App() {
  const [pageName, setPageName] = useState("Home");
  const HandleClick = (presentPage) => {
    setPageName(presentPage)
  }
  const renderSwitch = (pageName) => {
    switch(pageName) {
      case "home":
        return <Home />
      case "education":
        return <Education />
      case "contactme":
        return <Contact />
      case "skills":
        return <Skills />
      case "experience":
        return <Experience />
      case "projects":
        return <Projects />
      default:
        return <Home /> 
    }
  }
  return (
    <div>
      <Suspense>{renderSwitch(pageName)}</Suspense>
      <ManiNavigation 
        HandleClick = {HandleClick}
        pageName = {pageName}
      />
      <div style={{ marginTop:"100px" }}></div>
    </div>
  );
}

export default App;
