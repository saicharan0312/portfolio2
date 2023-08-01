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
        <div className='resume-icons'>
          <div>
            <button className='button-resume'>Resume</button>
          </div>
          <div className='icons'>
            <img className='icon' src='https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png' alt='linkedin'/>
            <img className='icon' src='https://img.icons8.com/?size=512&id=62856&format=png' alt='github'/>
            <img className='icon' src='https://img.icons8.com/?size=512&id=wDGo581Ea5Nf&format=png' alt='leetcode'/>
            <img className='icon' src='https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png' alt='instagram'/>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className='profile' src={imageAdd2} alt='profile' />
      </div>
    </div>
  )
}

export default Home


