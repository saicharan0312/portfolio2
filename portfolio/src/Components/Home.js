import React, { useState } from 'react';
import "./Home.css";
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import imageAdd2 from "../Data/Images/sai02.png";
import imageAdd1 from "../Data/Images/sai.JPG";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [essay, setEssay] = useState("");

  return (
    <>
      <div className='location-phone-email'>
        <div style={{ width: "25%" }}>
          <img src={imageAdd1} alt='profile' className='avatar' />
        </div>
        <div className='email-header'>
          <span><AiOutlineMail /> sa041328@ucf.edu</span>
        </div>
        <div className='phone-header phone-margin-520px'>
          <span><FaPhoneAlt /> +1 3216559969</span>
        </div>
        <div className='location-header location-margin-520px'>
          <span><GrLocation /> Orlando, Florda </span>
        </div>
      </div>
      <div className='introduction'>
        <div className='intro-div-photo'>
          <div className='intro-name'>
            <span className='span-val'>Hi there! I'm</span>
            <br></br>
            <h1> Sai Charan Reddy </h1>

            <p className='p-width'>Full Stack Software Engineer with experience in ReactJS, NodeJS, Express JS, Java, and Spring utilizing both NoSQL & SQL databases. Django Framework. C# MVC .NET Framework and AZ-900 - Microsoft Azure Fundamental certified. A productive developer who has a strong coding passion, as well as an enthusiastic learner who enjoys learning and picking up new technologies on a daily basis. proficient in  Java, Data Structures and Algorithms, Object Oriented Programming, Python, Computer Vision, Machine Learning, and Deep Learning. I'm also fully fascinated on the concept of creating software that helps people in the actual world solve their problems.</p>
            <div className='resume-icons'>
              <div className='resume-icon-width'>
                  <button 
                    className='button-resume'
                    onClick={() => window.open("https://docs.google.com/document/d/1MeeSdCydQf4y9wUihSXmGEPFtDSiu4kOJGoMte3XejU/edit?usp=sharing")}
                  >
                  Resume
                  </button>
              </div>
              <div className='icons'>
                <img
                  className='icon'
                  src='https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png'
                  alt='linkedin'
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/saicharan0312/")
                  }
                />
                <img 
                  className='icon' 
                  src='https://img.icons8.com/?size=512&id=62856&format=png' 
                  alt='github' 
                  onClick={() => window.open("https://github.com/saicharan0312")} 
                />
                <img 
                  className='icon' 
                  src='https://img.icons8.com/?size=512&id=wDGo581Ea5Nf&format=png' 
                  alt='leetcode' 
                  onClick={() => window.open("https://leetcode.com/saicharan0312/")} 
                />
                <img 
                  className='icon' 
                  src='https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png' 
                  alt='instagram' 
                  onClick={() => window.open("https://www.instagram.com/scr.insta/")} 
                />
              </div>
            </div>
          </div>
          <div className='image'>
            <img className='profile' src={imageAdd2} alt='profile' />
          </div>
        </div>
        <hr
          className='horizontal-line'
        />
        <div className='open-to-start'>
          <div className='start-date'>
            <h3 className='start-date-h3'>
              I'm open to start working from December - 2023
            </h3>
            <span className='what-i-do'>Currently working as Teaching Assistant as a part time job looking for a full time opportunity with my background skills : </span>
            <div className='bullet-points'>
              <div className='point-to-point'>
                <img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/direction-254-393852.png?f=avif&w=512' alt='bullet-icon' className='bullet' />
                <span className='point'>JavaScript, ReactJs, SQL, NodeJs, ExpressJs, MongoDB as Backend, AWS</span>
              </div>
              <div className='point-to-point'>
                <img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/direction-254-393852.png?f=avif&w=512' alt='bullet-icon' className='bullet' />
                <span className='point'>point 1</span>
              </div>
            </div>
          </div>
          <hr
            className='verticale-line'
          />
          <hr
            className='horizontal-line-two'
          />
          <div className='input-fields'>
            <form className='contact-me'>
              <label className='label-name'>
                Name:
              </label>
              <input className='input-name' type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Name' />

              <label className='label-email'>
                Email:
              </label>
              <input className='input-email' type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email' />

              <label className='label-essay'>
                Essay:
              </label>
              <textarea className='input-essay' type="text" value={essay} onChange={(event) => setEssay(event.target.value)} placeholder='Suggestion' />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home


