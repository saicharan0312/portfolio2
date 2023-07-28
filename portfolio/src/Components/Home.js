import React from 'react';
import "./Home.css";
import imageAdd2 from "../Data/Images/sai02.png";

function Home() {
  return (
    <div className='introduction'>
      <div className='intro-name'>
        <span className='span-val'>Hi there! I'm</span>
        <br></br>
        <h1> Sai Charan Reddy </h1>
        <br></br>
        <p className='p-width'>A passionate Full Stack developer & Graduate Student who loves to build web & android apps and enhance products. I’m also a chess player and Street Photographer ! I live in Orlnado, FL</p>
        <div>
          <button className='button-resume'>Resume</button>
          <div>
          
          </div>
        </div>
      </div>
      <div className='image'>
        <img src={imageAdd2} alt='profile' />
      </div>
    </div>
  )
}

export default Home


