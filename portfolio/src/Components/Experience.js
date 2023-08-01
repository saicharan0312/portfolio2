import React, { useState } from 'react';
import "./Experience.css";

export default function Experience() {
  const [company, setCompany] = useState("ucf");
  const listOfExperienec = ["ucf", "phenom", "opentext"];
  console.log(company);
  return (
    <div className='container'>
      <div className='header-buttons'>
        {listOfExperienec.map((exp, index)=>(
          <button 
            key={index} 
            className='experience-button'
            onClick={()=> setCompany(exp)}
          >
            <span className='experinec-text' >{exp}</span>
          </button>
        ))}
      </div>
      <div className='experience-content'>
        <span>exp</span>
      </div>
    </div>
  )
}
