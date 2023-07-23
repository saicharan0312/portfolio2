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
      case "edu":
        return <Education />
      case "con":
        return <Contact />
      case "ski":
        return <Skills />
      case "exp":
        return <Experience />
      case "abt":
      default:
        return <Home /> 
    }
  }
  return (
    <>
      <ManiNavigation 
        HandleClick = {HandleClick}
      />
      <Suspense>{renderSwitch(pageName)}</Suspense>
    </>
  );
}

export default App;
