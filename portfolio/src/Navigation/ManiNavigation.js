import React from 'react';
import "./MainNavigation.css";

function ManiNavigation(props) {
  const pageNow = props.pageName;

  return (
    <div className='outer-div'>
      <div className='inner-div'>

        <button onClick={() => props.HandleClick("home")} className='each-button'>
          <a className={pageNow === "home" ? "nav__link active-link" : "nav__link"}>
            <i className='bx bx-home-alt nav__icon'></i>
            <span className="nav__name">Home</span>
          </a>
        </button>

        <button onClick={() => props.HandleClick("education")} className='each-button'>
          <a className={pageNow === "education" ? "nav__link active-link" : "nav__link"}>
            <i className='bx bx-book nav__icon'></i>
            <span className="nav__name">Education</span>
          </a>
        </button>

        <button onClick={() => props.HandleClick("skills")} className='each-button'>
          <a className={pageNow === "skills" ? "nav__link active-link" : "nav__link"}>
            <i className='bx bx-code nav__icon'></i>
            <span className="nav__name">Skills</span>
          </a>
        </button>

        <button onClick={() => props.HandleClick("projects")} className='each-button'>
          <a className={pageNow === "projects" ? "nav__link active-link" : "nav__link"}>
            <i className='bx bx-briefcase-alt nav__icon'></i>
            <span className="nav__name">Projects</span>
          </a>
        </button>

        <button onClick={() => props.HandleClick("experience")} className='each-button'>
          <a className={pageNow === "experience" ? "nav__link active-link" : "nav__link"}>
            <i className='bx bx-briefcase nav__icon'></i>
            <span className="nav__name">Experience</span>
          </a>
        </button>

      </div>
    </div>
  );
}

export default ManiNavigation;
