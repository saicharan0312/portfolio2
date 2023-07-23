import React from 'react';
import "./Scroll";
import "./MainNavigation.css";

function ManiNavigation(props) {
  const pageNow = props.pageName;
  console.log("pagenow", pageNow);
  
  return (
    <nav class="nav container" style={{ display: "flex", justifyContent:"space-around" }}>
      <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
              <button onClick={() => props.HandleClick("home")} class="nav__item">
                { pageNow==="home" ? 
                  (<a href="#home" class="nav__link active-link">
                      <i class='bx bx-home-alt nav__icon'></i>
                      <span class="nav__name">Home</span>
                  </a>)
                  :
                  (
                    <a href="#home" class="nav__link">
                      <i class='bx bx-home-alt nav__icon'></i>
                      <span class="nav__name">Home</span>
                    </a>
                  )
                }
              </button>
              
              <button onClick={() => props.HandleClick("experience")} class="nav__item">
                { pageNow === "experience" ? 
                  <a href="#about" class="nav__link active-link">
                      <i class='bx bx-user nav__icon'></i>
                      <span class="nav__name">Experience</span>
                  </a>
                  :
                  <a href="#about" class="nav__link">
                      <i class='bx bx-user nav__icon'></i>
                      <span class="nav__name">Experience</span>
                  </a>
                }
              </button>

              <button onClick={() => props.HandleClick("skills")} class="nav__item">
                {pageNow==="skills" ? 
                  <a href="#skills" class="nav__link active-link">
                      <i class='bx bx-book-alt nav__icon'></i>
                      <span class="nav__name">Skills</span>
                  </a>
                  :
                  <a href="#skills" class="nav__link">
                      <i class='bx bx-book-alt nav__icon'></i>
                      <span class="nav__name">Skills</span>
                  </a>
                }
              </button>

              <button onClick={() => props.HandleClick("about")} class="nav__item">
                {pageNow==="about" ? 
                  <a href="#portfolio" class="nav__link active-link">
                      <i class='bx bx-briefcase-alt nav__icon'></i>
                      <span class="nav__name">About</span> 
                  </a> 
                  :
                  <a href="#portfolio" class="nav__link">
                      <i class='bx bx-briefcase-alt nav__icon'></i>
                      <span class="nav__name">About</span> 
                  </a> 
                }
              </button>

              <button onClick={() => props.HandleClick("contactme")} class="nav__item">
                {pageNow==="contactme" ? 
                  <a href="#contactme" class="nav__link active-link">
                      <i class='bx bx-message-square-detail nav__icon'></i>
                      <span class="nav__name">Contactme</span>
                  </a> 
                  :
                  <a href="#contactme" class="nav__link">
                      <i class='bx bx-message-square-detail nav__icon'></i>
                      <span class="nav__name">Contactme</span>
                  </a> 
                }
              </button>
          </ul>
      </div>
    </nav>
  )
}

export default ManiNavigation
