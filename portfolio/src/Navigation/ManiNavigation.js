import React from 'react';
import "./MainNavigation.css";

function ManiNavigation(props) {
  const pageNow = props.pageName;
  console.log("pagenow", pageNow);

  return (
    <div className='outer-div'>
      <div className='inner-div'>
        <button onClick={() => props.HandleClick("home")} className='botton-css'>
          {pageNow === "home" ?
            <a href="#home" class="nav__link active-link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Home</span>
            </a>
            :
            <a href="#home" class="nav__link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Home</span>
            </a>
          }
        </button>
        <button onClick={() => props.HandleClick("education")}>
          {pageNow === "education" ?
            <a href="#home" class="nav__link active-link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Education</span>
            </a>
            :
            <a href="#home" class="nav__link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Education</span>
            </a>
          }
        </button>
        <button onClick={() => props.HandleClick("about")} >
          {pageNow === "about" ?
            <a href="#home" class="nav__link active-link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">About</span>
            </a> :
            <a href="#home" class="nav__link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">About</span>
            </a>
          }
        </button>
        <button onClick={() => props.HandleClick("skills")} >
          {pageNow === "skills" ?
            <a href="#home" class="nav__link active-link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Skills</span>
            </a> :
            <a href="#home" class="nav__link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">Skills</span>
            </a>
          }
        </button>
        <button onClick={() => props.HandleClick("experience")}>
          {pageNow === "experience" ?
            <a href="#home" class="nav__link active-link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">experience</span>
            </a> :
            <a href="#home" class="nav__link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">experience</span>
            </a>
          }
        </button>
        <button onClick={() => props.HandleClick("contactme")} >
          {pageNow === "contactme" ?
            <a href="#home" class="nav__link active-link">
              <i class='bx bx-home-alt nav__icon'></i>
              <span class="nav__name">contactme</span>
            </a> :
            <a href="#home" class="nav__link">
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
