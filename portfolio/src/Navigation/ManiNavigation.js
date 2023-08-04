import React from 'react';
import "./MainNavigation.css";

function ManiNavigation(props) {
  const pageNow = props.pageName;

  return (
    <div className='outer-div'>
      <div className='inner-div'>
        <button onClick={() => props.HandleClick("home")} className='botton-css each-button'>
          {pageNow === "home" ?
            <a href="#home" class="nav__link active-link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Home</span>
            </a>
            :
            <a href="#home" class="nav__link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Home</span>
            </a>
          }
        </button>
        <button onClick={() => props.HandleClick("education")} className='each-button'>
          {pageNow === "education" ?
            <a href="#home" class="nav__link active-link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Education</span>
            </a>
            :
            <a href="#home" class="nav__link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Education</span>
            </a>
          }
        </button>
        <button onClick={() => props.HandleClick("projects")} className='each-button'>
          {pageNow === "projects" ?
            <a href="#home" class="nav__link active-link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Projects</span>
            </a> :
            <a href="#home" class="nav__link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Projects</span>
            </a>
          }
        </button>
        <button onClick={() => props.HandleClick("skills")} className='each-button'>
          {pageNow === "skills" ?
            <a href="#home" class="nav__link active-link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Skills</span>
            </a> :
            <a href="#home" class="nav__link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Skills</span>
            </a>
          }
        </button>
        <button onClick={() => props.HandleClick("experience")} className='each-button'>
          {pageNow === "experience" ?
            <a href="#home" class="nav__link active-link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">experience</span>
            </a> :
            <a href="#home" class="nav__link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">experience</span>
            </a>
          }
        </button>
        <button onClick={() => props.HandleClick("contactme")} className='each-button'>
          {pageNow === "contactme" ?
            <a href="#home" class="nav__link active-link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">contactme</span>
            </a> :
            <a href="#home" class="nav__link link-nav">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">contactme</span>
            </a>
          }
        </button>
      </div>
    </div>
  )
}

export default ManiNavigation
