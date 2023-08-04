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
      
        <p className='p-width'>Full Stack Software Engineer with experience in ReactJS, NodeJS, Express JS, Java, and Spring utilizing both NoSQL & SQL databases. Django Framework. C# MVC .NET Framework and AZ-900 - Microsoft Azure Fundamental certified. A productive developer who has a strong coding passion, as well as an enthusiastic learner who enjoys learning and picking up new technologies on a daily basis. proficient in  Java, Data Structures and Algorithms, Object Oriented Programming, Python, Computer Vision, Machine Learning, and Deep Learning. I'm also fully fascinated on the concept of creating software that helps people in the actual world solve their problems.</p>
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


