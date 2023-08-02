import React, { useEffect, useState } from 'react';
import "./Experience.css";
import expdata from "../Data/JsonFiles/experience.json";

export default function Experience() {
  const [company, setCompany] = useState("University of Central Florida");
  const [desc, setDesc] = useState(expdata[0]);
  
  useEffect(() => {
    const description = expdata.filter((experienceC, index) => experienceC.name === company);
    setDesc(description[0]);
  },[company])

  const listOfExperienec = ["University of Central Florida", "phenom", "opentext"];
  return (
    <div className='container'>
      <div className='header-buttons'>
        {listOfExperienec.map((exp, index)=>(
          <button 
            key={index} 
            className='experience-button'
            onClick={
              ()=> setCompany(exp)
            }
          >
            <span className='experience-text' >{exp}</span>
          </button>
        ))}
      </div>
      <div className='experience-content'>
        <div className='position-tech-company'>
          <h2 className='position'>{desc.title + "   "} </h2>
          <h2 className='tech'> {" - "  + desc.tech + " "} </h2>
          <a href={desc.link} className='link-company'>
            <h4 className='company'> {desc.company}</h4>
          </a>
        </div>
        <div className='date-info-i'>
          <span className='date'>{desc.date}</span>
          <span className='info-icon'><img src='https://img.icons8.com/?size=512&id=77&format=png' alt='info' className='info-icon'/></span>
        </div>
        <div className='location'> 
          <img src='https://img.icons8.com/?size=512&id=7880&format=png' alt='location-img' className='loc-icon'/>
          { desc.location } 
        </div>
        <div className='bullet-points'>
          {desc.description.map((point, index) =>(
            <div className='point-to-point' key={index}>
              <img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/direction-254-393852.png?f=avif&w=512' alt='bullet-icon' className='bullet'/>
              <span className='point'>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
