import React from 'react';
import "./MainNavigation.css";

function ManiNavigation(props) {
  return (
    <nav class="nav container" style={{ display: "flex", justifyContent:"space-around" }}>
      <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
              <button onClick={() => props.HandleClick("home")} class="nav__item">
                  <a href="#home" class="nav__link">
                      <i class='bx bx-home-alt nav__icon'></i>
                      <span class="nav__name">Home</span>
                  </a>
              </button>
              
              <button onClick={() => props.HandleClick("exp")} class="nav__item">
                  <a href="#about" class="nav__link">
                      <i class='bx bx-user nav__icon'></i>
                      <span class="nav__name">exp</span>
                  </a>
              </button>

              <button onClick={() => props.HandleClick("ski")} class="nav__item">
                  <a href="#skills" class="nav__link">
                      <i class='bx bx-book-alt nav__icon'></i>
                      <span class="nav__name">Skills</span>
                  </a>
              </button>

              <button onClick={() => props.HandleClick("abt")} class="nav__item">
                  <a href="#portfolio" class="nav__link">
                      <i class='bx bx-briefcase-alt nav__icon'></i>
                      <span class="nav__name">Portfolio</span>
                  </a>
              </button>

              <button onClick={() => props.HandleClick("con")} class="nav__item">
                  <a href="#contactme" class="nav__link">
                      <i class='bx bx-message-square-detail nav__icon'></i>
                      <span class="nav__name">Contactme</span>
                  </a>
              </button>
          </ul>
      </div>
    </nav>
  )
}

export default ManiNavigation
