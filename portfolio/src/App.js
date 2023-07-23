import React, { useState, Suspense } from 'react'
import ManiNavigation from './Navigation/ManiNavigation';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Home from './Components/Home';

function App() {
  const [pageName, setPageName] = useState("Home");
  const HandleClick = (presentPage) => {
    setPageName(presentPage)
  }
  console.log("page", pageName);
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
      case "about":
        return <Home />
      default:
        return <Home /> 
    }
  }
  return (
    <>
      <ManiNavigation 
        HandleClick = {HandleClick}
        pageName = {pageName}
      />
      <Suspense>{renderSwitch(pageName)}</Suspense>
    </>
  );
}

export default App;
